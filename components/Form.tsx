"use client";

import { useState } from "react";
// config
import config from "@/config/general";

const findRequestURL = (mail: string) => {
  const formURL = config.subscribeForm.split("/");
  const getNumbers = formURL.filter((item) => Number(item) && item);

  const accountID = getNumbers[0];
  const formID = getNumbers[1];

  const requestURL = `https://assets.mailerlite.com/jsonp/${accountID}/forms/${formID}/subscribe?fields[email]=${mail}`;

  return requestURL;
};

const Form = () => {
  const [mail, setMail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    fetch(findRequestURL(mail), {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessage("Thanks for subscribing!");
        } else {
          setMessage("Something went wrong, please try again.");
        }
      })
      .catch(() => setMessage("Something went wrong, please try again."))
      .finally(() => {
        setMail("");
      });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="relative">
        <div className="min-w-0 flex-1">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="fields[email]"
            autoComplete="email"
            aria-invalid="false"
            id="email"
            placeholder="Enter your email"
            className="form-control block w-full rounded-sm bg-gray px-4 py-5 text-base text-black placeholder-gray-500 focus:outline-none"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="mt-1 ml-2 sm:mt-3 sm:ml-3 flex-1 sm:flex-auto w-full sm:w-auto">
          <button
            type="submit"
            className="relative sm:absolute right-2 sm:top-2 w-full sm:w-auto block  rounded-sm bg-activeButton py-3 px-4 font-medium text-white shadow hover:bg-activeButton disabled:cursor-not-allowed"
            disabled={mail === "" || loading}
          >
            Join Waitlist
          </button>
        </div>
      </div>
      <span className="text-sm px-2 italic text-red-500">{message}</span>
    </form>
  );
};

export default Form;
