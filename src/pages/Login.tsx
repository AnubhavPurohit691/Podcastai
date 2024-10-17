import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type formschema = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const fieldSchema: ZodType<formschema> = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(16),
  });
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<z.infer<typeof fieldSchema>>({
    resolver: zodResolver(fieldSchema),
  });
  
  const onSubmit: SubmitHandler<formschema> = (data) => {
    console.log(data);
    toast("submitted!");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900 shadow-lg rounded px-8 pt-6 pb-8 mb-4 text-white">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`shadow appearance-none border border-gray-600 bg-gray-800 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline`}
              type="email"
              placeholder="m@example.com"
              {...register("email", { required: "email is required" })}
            />
            {errors.email && <p className="text-red-500">email is invalid</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className={`shadow appearance-none border border-gray-600 bg-gray-800 rounded w-full py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type="password"
              placeholder="******************"
              {...register("password", { required: "password is required" })}
            />
            {errors.password && <p className="text-red-500">password is invalid</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button>
          </div>
          <div className="text-center mt-4">
            <Link to={"/signup"} className="inline-block align-baseline font-bold text-sm text-gray-400 hover:text-gray-200">
              New account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
