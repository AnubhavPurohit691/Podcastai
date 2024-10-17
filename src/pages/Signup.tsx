import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type formschema = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  gender: string;
};

export default function SignupForm() {
  // Define Zod schema
  const fieldSchema: ZodType<formschema> = z.object({
    fullname: z.string().min(2, "Full name is required").max(100, "Full name is too long"),
    username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be less than 20 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters").max(16, "Password must be less than 16 characters"),
    gender: z.enum(["Male", "Female", "Other"]),
  });

  // Use useForm with Zod schema validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof fieldSchema>>({
    resolver: zodResolver(fieldSchema),
  });

  // OnSubmit handler
  const onSubmit: SubmitHandler<formschema> = (data) => {
    console.log(data);
    toast("Sign up successful!");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900 shadow-lg rounded px-8 pt-6 pb-8 mb-4 text-white">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-center mb-2">Sign Up</h2>
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="fullname">
              Full Name
            </label>
            <input
              className={`shadow appearance-none border border-gray-600 bg-gray-800 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline`}
              id="fullname"
              type="text"
              placeholder="Full Name"
              {...register("fullname")}
            />
            {errors.fullname && <p className="text-red-500">{errors.fullname.message}</p>}
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className={`shadow appearance-none border border-gray-600 bg-gray-800 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline`}
              id="username"
              type="text"
              placeholder="Username"
              {...register("username")}
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`shadow appearance-none border border-gray-600 bg-gray-800 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              placeholder="m@example.com"
              {...register("email")}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className={`shadow appearance-none border border-gray-600 bg-gray-800 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type="password"
              placeholder="******************"
              {...register("password")}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Gender
            </label>
            <div className="flex items-center">
              <label className="mr-4 text-gray-300">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  value="Male"
                  {...register("gender")}
                />
                Male
              </label>
              <label className="mr-4 text-gray-300">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  value="Female"
                  {...register("gender")}
                />
                Female
              </label>
              <label className="text-gray-300">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  value="Other"
                  {...register("gender")}
                />
                Other
              </label>
            </div>
            {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
          </div>

          {/* Submit button */}
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
              disabled={isSubmitting}
            >
              Sign Up
            </button>
          </div>

          <div className="text-center mt-4">
            <Link to={"/login"} className="inline-block align-baseline font-bold text-sm text-gray-400 hover:text-gray-200">
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
