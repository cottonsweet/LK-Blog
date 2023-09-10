"use client";

// React
import { useState } from "react";

// util
import { contactFormSchema } from "../util/contactFormValidate";

interface FormType {
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormType>({
    email: "",
    subject: "",
    message: "",
  });

  const changeFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-2/4 mx-auto h-auto bg-gray-400 rounded-lg">
      <form
        onSubmit={submitFormData}
        className="flex flex-col justify-between items-center p-4"
      >
        <label
          htmlFor="email"
          className="text-start w-full pb-2 font-bold text-slate-100 text-lg"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoFocus
          value={form.email}
          onChange={changeFormData}
          placeholder="이메일을 입력해 주세요 !"
          className="w-full p-2 rounded-md mb-3 focus:outline-none focus:ring-2 ring-indigo-300 ring-inset"
        />

        <label
          htmlFor="subject"
          className="text-start w-full pb-2 font-bold text-slate-100 text-lg"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={changeFormData}
          placeholder="제목을 입력해 주세요 !"
          className="w-full p-2 rounded-md mb-3 focus:outline-none focus:ring-2 ring-indigo-300 ring-inset"
        />

        <label
          htmlFor="message"
          className="text-start w-full pb-2 font-bold text-slate-100 text-lg"
        >
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={changeFormData}
          placeholder="메세지를 입력해 주세요 !"
          className="w-full p-2 rounded-md mb-3 resize-none focus:outline-none focus:ring-2 ring-indigo-300 ring-inset"
        />

        <button className="w-full rounded-md p-4 bg-blue-300 text-blue-50 font-bold text-lg hover:text-xl">
          Submit
        </button>
      </form>
    </div>
  );
}
