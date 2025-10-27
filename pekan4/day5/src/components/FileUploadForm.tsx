import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface FileFormData {
  title: string;
  description: string;
  file: FileList;
}

type UploadedInfo = {
  title: string;
  description: string;
  fileName: string;
};

export default function FileUploadForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadedInfo, setUploadedInfo] = useState<UploadedInfo | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<FileFormData>();

  const fileInput = watch("file");

  useEffect(() => {
    if (fileInput?.[0]) {
      const file = fileInput[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
      return () => reader.abort();
    }
    setPreview(null);
  }, [fileInput]);

  const onSubmit = async (data: FileFormData) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("file", data.file[0]);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form data:", Object.fromEntries(formData));

    const file = data.file[0];
    setUploadedInfo({
      title: data.title,
      description: data.description,
      fileName: file.name,
    });
  };

  const handleReset = () => {
    reset();
    setPreview(null);
    setUploadedInfo(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-lg border border-border p-6 shadow-sm">
        <header className="mb-6 space-y-1">
          <h2 className="text-xl font-semibold text-primary">
            Form Upload dengan Preview
          </h2>
          <p className="text-sm text-muted-foreground">
            Unggah file dan lihat preview secara langsung.
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Judul</label>
              <Input
                {...register("title", { required: "Judul wajib diisi" })}
                placeholder="Contoh: Foto profil"
              />
              {errors.title && (
                <p className="text-sm text-destructive">{errors.title.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Deskripsi</label>
              <Input
                {...register("description", {
                  required: "Deskripsi wajib diisi",
                })}
                placeholder="Tuliskan deskripsi singkat"
              />
              {errors.description && (
                <p className="text-sm text-destructive">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">File</label>
            <Input
              {...register("file", { required: "File wajib diunggah" })}
              type="file"
              accept="image/*"
            />
            {errors.file && (
              <p className="text-sm text-destructive">{errors.file.message}</p>
            )}
            <p className="text-xs text-muted-foreground">
              Pilih file gambar untuk melihat preview.
            </p>
          </div>

  {preview && (
            <div className="rounded-md border border-dashed border-muted-foreground/40 p-4">
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                Preview:
              </p>
              <img
                src={preview}
                alt="Preview upload"
                className="h-40 w-40 rounded-md object-cover shadow"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Mengunggah..." : "Kirim Form"}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={handleReset}
              disabled={isSubmitting}
            >
              Reset
            </Button>
          </div>
        </form>
      </div>

      {uploadedInfo && (
        <div className="rounded-lg border border-border bg-secondary/50 p-6 text-sm shadow-sm">
          <h3 className="text-lg font-semibold text-primary">
            Hasil Pengiriman
          </h3>
          <p className="text-muted-foreground">
            Data berikut adalah hasil simulasi penyimpanan form.
          </p>
          <dl className="mt-4 space-y-2">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Judul</dt>
              <dd className="font-medium">{uploadedInfo.title}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Deskripsi</dt>
              <dd className="font-medium">{uploadedInfo.description}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Nama File</dt>
              <dd className="font-medium">{uploadedInfo.fileName}</dd>
            </div>
          </dl>
          {preview && (
            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                Preview Terkini
              </p>
              <img
                src={preview}
                alt="Preview submit"
                className="h-32 w-32 rounded-md object-cover shadow"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
