"use client";

import config from "@/config/general";

const About = () => {
  return (
    <div className="mt-16 xl:mt-0 flex lg:flex-row flex-col justify-between gap-4 mb-24">
      {config.contents.about.map((item) => (
        <div
          key={item.id}
          className="bg-grayBackground w-full lg:w-1/3 px-8 py-7 rounded flex flex-col items-start gap-3"
        >
          <span>{item.emoji}</span>
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-base font-normal">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
