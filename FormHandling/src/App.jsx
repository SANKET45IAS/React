import React from "react";
import { useForm } from "react-hook-form";

export default function  App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting }, // Added isSubmitting
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    return new Promise((resolve) => {
      setTimeout(() => {
        reset();
        resolve();
      }, 1500); // simulate async operation
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Reference Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Text Input */}
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            {...register("fullName", { required: "Full name is required" })}
            className="w-full p-2 border rounded"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Radio Buttons */}
        <div>
          <label className="block font-medium mb-1">Gender</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                value="male"
                {...register("gender", { required: true })}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                {...register("gender", { required: true })}
              />{" "}
              Female
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm">Please select gender</p>
          )}
        </div>

        {/* Select Dropdown */}
        <div>
          <label className="block font-medium">Country</label>
          <select
            {...register("country", { required: true })}
            className="w-full p-2 border rounded"
          >
            <option value="">-- Select --</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="germany">Germany</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm">Country is required</p>
          )}
        </div>

        {/* Checkbox */}
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("terms", { required: true })}
              className="mr-2"
            />
            I agree to the terms and conditions
          </label>
          {errors.terms && (
            <p className="text-red-500 text-sm">
              You must accept the terms and conditions
            </p>
          )}
        </div>

        {/* Textarea */}
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            {...register("message")}
            className="w-full p-2 border rounded"
            rows="4"
            placeholder="Optional message..."
          ></textarea>
        </div>

        {/* File Input */}
        <div>
          <label className="block font-medium">Upload File</label>
          <input type="file" {...register("file")} className="w-full" />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
