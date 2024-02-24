"use client";

import Image from "next/image";
import { Title } from "./Atoms";
import config from "@/config/general";
import { useState } from "react";

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <div className="mb-24">
      <Title label="Frequently Asked Questions" />
      <div className="flex gap-8 justify-center">
        <div className="w-11/12 xl:w-5/12 flex flex-col gap-4">
          {config.contents.faq.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setActiveQuestion(index)}
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  <h4 className="flex-1 font-semibold text-lg text-black">
                    {index + 1}. {item.question}
                  </h4>
                  <Image alt="" src={"/down.svg"} width={12} height={6} />
                </div>
                {activeQuestion === index && (
                  <p className="text-base text-activeButton w-full xl:w-[550px] pt-4 mb-2">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
