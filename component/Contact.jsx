import React from "react";
import banner from "../../public/img/Banner.jpg";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can add your form submission logic here
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
      <div className="flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <h3 className="text-xl">Contact us</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className="mb-4 space-y-2">
              <label htmlFor="name" className="block text-sm font-medium ">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="mb-4 space-y-2">
              <label htmlFor="name" className="block text-sm font-medium ">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="mb-4 space-y-2">
              <label htmlFor="name" className="block text-sm font-medium ">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your Phone"
                className="w-full px-3 py-1 border rounded-md outline-none"
                {...register("phone", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="mb-4 space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message here"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="order-1 w-full md:w-1/2">
          <img src={banner} className="w-full h-auto" alt="Banner" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
