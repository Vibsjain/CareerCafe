import React, { useState } from "react";
import api from "../api/index";
import swal from "sweetalert";

export default function BatchQueryForm() {
  const InputText = `bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-[#EB924E] leading-tight focus:outline-none focus:bg-white focus:border-[#10225F] mb-5`;
  const InputText2 = `bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/3 py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-[#10225F] mb-5 mr-2`;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    degree: "",
    college: "",
    passYear: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post("/batchquery", form);
    console.log(form, response);
    swal({
      title: "Success",
      text: "Form Submitted Successfully!",
      icon: "success",
    });
    setForm({
      name: "",
      email: "",
      phone: "",
      degree: "",
      college: "",
      passYear: "",
      message: "",
    });
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-20">
        <h3 className="text-4xl py-4 text-[#10225F] text-center text-bold mb-4">
          Still confused and have questions about batch?
        </h3>
        <form action="#" className="flex flex-col justify-center">
          <div className="mb-4">
            <input
              className={InputText}
              id="inline-full-name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className={InputText}
              id="inline-full-name"
              type="text"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className={InputText}
              id="inline-full-name"
              type="text"
              placeholder="Contact Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <div className="flex flex-row justify-center w-full items-center">
              <input
                className={InputText2}
                id="inline-full-name"
                type="text"
                placeholder="Degree"
                value={form.degree}
                onChange={(e) => setForm({ ...form, degree: e.target.value })}
              />
              <input
                className={InputText2}
                id="inline-full-name"
                type="text"
                placeholder="College Name"
                value={form.college}
                onChange={(e) => setForm({ ...form, college: e.target.value })}
              />
              <input
                className={InputText}
                id="inline-full-name"
                type="text"
                placeholder="Passing Year"
                value={form.passYear}
                onChange={(e) => setForm({ ...form, passYear: e.target.value })}
              />
            </div>
            <textarea
              className={InputText}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
          </div>
          <button
            className="bg-[#eb924e] transition-transform duration-500 hover:scale-105 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
