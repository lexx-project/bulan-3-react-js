import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

const orderSchema = z.object({
  customerName: z.string().min(3, "Nama minimal 3 karakter"),
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
  items: z
    .array(
      z.object({
        itemName: z.string().min(1, "Nama produk wajib diisi"),
        quantity: z
          .number()
          .int("Jumlah harus bilangan bulat")
          .min(1, "Minimal 1")
          .max(99, "Maksimal 99"),
      })
    )
    .min(1, "Tambahkan minimal 1 produk"),
  notes: z
    .string()
    .max(200, "Catatan maksimal 200 karakter")
    .optional()
    .or(z.literal("")),
});

type OrderFormData = z.infer<typeof orderSchema>;

export default function DynamicArrayForm() {
  const [submittedOrder, setSubmittedOrder] = useState<OrderFormData | null>(
    null
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    mode: "onBlur",
    defaultValues: {
      customerName: "",
      email: "",
      items: [
        {
          itemName: "",
          quantity: 1,
        },
      ],
      notes: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const itemsErrorMessage = (
    errors.items as { root?: { message?: string } } | undefined
  )?.root?.message;

  const onSubmit = async (data: OrderFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Order submitted:", data);
    setSubmittedOrder(data);
  };

  const handleAddItem = () => {
    append({ itemName: "", quantity: 1 });
  };

  const handleReset = () => {
    reset();
    setSubmittedOrder(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-lg border border-border p-6 shadow-sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          noValidate
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Nama Pemesan</label>
              <Input
                {...register("customerName")}
                placeholder="Masukkan Nama Anda"
                autoComplete="name"
              />
              {errors.customerName && (
                <p className="text-sm text-destructive">
                  {errors.customerName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Email</label>
              <Input
                {...register("email")}
                placeholder="Masukkan Email Anda"
                autoComplete="email"
                type="email"
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <section className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-foreground">
                Daftar Produk
              </h3>
              <Button
                type="button"
                variant="secondary"
                onClick={handleAddItem}
                disabled={isSubmitting}
              >
                Tambah Produk
              </Button>
            </div>
            {itemsErrorMessage && (
              <p className="text-sm text-destructive">{itemsErrorMessage}</p>
            )}
            <div className="space-y-4">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="rounded-md border border-dashed border-muted-foreground/40 p-4"
                >
                  <div className="flex flex-wrap items-end gap-4">
                    <div className="flex-1 min-w-[200px]">
                      <label className="mb-1 block text-sm font-medium">
                        Nama Produk
                      </label>
                      <Input
                        {...register(`items.${index}.itemName`)}
                        placeholder="Contoh: Paket Hemat"
                      />
                      {errors.items?.[index]?.itemName && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.items[index]?.itemName?.message}
                        </p>
                      )}
                    </div>
                    <div className="w-full max-w-[140px]">
                      <label className="mb-1 block text-sm font-medium">
                        Jumlah
                      </label>
                      <Input
                        {...register(`items.${index}.quantity`, {
                          valueAsNumber: true,
                        })}
                        type="number"
                        min={1}
                        max={99}
                      />
                      {errors.items?.[index]?.quantity && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.items[index]?.quantity?.message}
                        </p>
                      )}
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => remove(index)}
                      disabled={fields.length === 1 || isSubmitting}
                    >
                      Hapus
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">Catatan (opsional)</label>
            <textarea
              {...register("notes")}
              placeholder="Tambahkan informasi tambahan untuk pesanan ini"
              className="min-h-[96px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            />
            {errors.notes && (
              <p className="text-sm text-destructive">{errors.notes.message}</p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Memproses..." : "Simpan Pesanan"}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={handleReset}
              disabled={isSubmitting}
            >
              Reset Form
            </Button>
          </div>
        </form>
      </div>

      {submittedOrder && (
        <div className="rounded-lg border border-border bg-secondary/50 p-6 text-sm shadow-sm">
          <h3 className="text-lg font-semibold text-primary">
            Ringkasan Pesanan
          </h3>
          <p className="text-muted-foreground">
            Berikut data yang berhasil disimpan dari form dinamis.
          </p>
          <dl className="mt-4 space-y-2">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Nama</dt>
              <dd className="font-medium">{submittedOrder.customerName}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Email</dt>
              <dd className="font-medium">{submittedOrder.email}</dd>
            </div>
            <div className="space-y-2 rounded-md border border-dashed border-muted-foreground/40 p-3">
              <dt className="text-sm font-semibold text-foreground">
                Produk Dipesan
              </dt>
              <ul className="space-y-1">
                {submittedOrder.items.map((item, index) => (
                  <li
                    key={`${item.itemName}-${index}`}
                    className="flex justify-between gap-3 text-muted-foreground"
                  >
                    <span>{item.itemName}</span>
                    <span className="font-medium text-foreground">
                      x{item.quantity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {submittedOrder.notes && (
              <div className="rounded-md bg-background/60 p-3">
                <dt className="text-muted-foreground">Catatan</dt>
                <dd className="font-medium">{submittedOrder.notes}</dd>
              </div>
            )}
          </dl>
        </div>
      )}
    </div>
  );
}
