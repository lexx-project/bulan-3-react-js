import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(data);
        resolve();
      }, 2000);
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-5 max-w-sm mx-auto"
      >
        <Input
          {...register("firstName", { required: "First name is required" })}
          placeholder="First Name"
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}{" "}
        <Input
          {...register("lastName", { required: "Last Name is required" })}
          placeholder="Last Name"
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
        <Input
          {...register("email", { required: "Email is Required" })}
          placeholder="Email"
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        {isSubmitting ? (
          <Button disabled type="submit">
            Submitting...
          </Button>
        ) : (
          <Button type="submit">Submit</Button>
        )}
        <h1 className="text-[20px] font-bold text-center mb-10">
          See the result in the console
        </h1>
      </form>
    </>
  );
}
