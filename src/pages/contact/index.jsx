import { Helmet } from "react-helmet-async";
import { useGoBack } from "../../js/hooks/tools/useGoBack";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup
  .object({
    name: yup.string().min(3).required(),
    email: yup.string().email().matches(/^[a-zA-Z0-9._%+-]+@stud.noroff.no$/, "Email must be of type @stud.noroff.no"),
    subject: yup.string().min(4),
    message: yup.string().min(10, "message must be at least 10 characters")
    })
  .required();

function Contact() {
  const [ isSuccess, setIsSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit() {
    setIsSuccess(true);
    setTimeout(() => {
    reset()
    }, 1500);
  }

const goBack = useGoBack();

  return (
    <main className="flex items-center justify-center p-12">
      <Helmet>
        <meta name="description" content="Contact us at Holidaze to give us feedback and to help solve your issues" />
        <title>Contact | Holidaze</title>
      </Helmet>
      <div class="mx-auto w-full max-w-[550px]">
      <div className="hover:underline hover:cursor-pointer" onClick={goBack}>
        Back
      </div>
        <h1 className="text-5xl font-medium text-center mb-14">Contact</h1>
        <form className="font-inder" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label for="name" p-2 className="block mb-3 font-medium">
              Full Name
            </label>
            <input {...register("name")} type="text" name="name" id="name" placeholder="Full Name" class="w-full p-2 border rounded-lg outline-none focus:border-ocean focus:shadow-md" />
            <p className="error-message">{errors.name?.message}</p>
          </div>
          <div className="mb-5">
            <label for="email" className="block mb-3 font-medium ">
              Email Address
            </label>
            <input {...register("email")} type="email" name="email" id="email" placeholder="example@domain.com" class="w-full p-2 border rounded-lg outline-none focus:border-ocean focus:shadow-md" />
            <p className="error-message">{errors.email?.message}</p>
          </div>
          <div className="mb-5">
            <label for="subject" className="block mb-3 font-medium">
              Subject
            </label>
            <input {...register("subject")}  type="text" name="subject" id="subject" placeholder="Enter your subject" class="w-full p-2 border rounded-lg outline-none focus:border-ocean focus:shadow-md" />
            <p className="error-message">{errors.subject?.message}</p>
          </div>
          <div className="mb-5">
            <label for="message" className="block mb-3 font-medium">
              Message
            </label>
            <textarea {...register("message")}
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full p-2 font-medium bg-white border rounded-lg outline-none resize-none focus:border-ocean focus:shadow-md"
            ></textarea>
            <p className="error-message">{errors.message?.message}</p>
          </div>
          <div>
            <button className="p-2 border rounded-lg outline-none hover:shadow-form bg-success disabled:bg-gray">Submit</button>
          </div>
          {isSuccess && <div className="mt-2 success">Message was successfully sent</div>}
        </form>
      </div>
    </main>
  );
}

export default Contact;
