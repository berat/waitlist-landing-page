"use client";
import config from "@/config/general";

const Price = () => {
  return (
    <div className="mb-24">
      <div className="bg-grayBackground rounded-md">
        <div className="w-11/12 xl:w-[1050px] mx-auto py-16">
          <p className="font-light text-2xl text-activeButton text-center">
            {config.contents.price.description}
          </p>
          <div className="flex xl:flex-row flex-col w-fit mx-auto gap-12 items-center mt-12">
            <ul className="flex flex-col gap-1">
              {config.contents.price.advantages.map((advantage, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 pl-2 font-normal text-lg text-activeButton"
                >
                  <div className="w-[5px] h-[5px] bg-primary rounded" />
                  {advantage}
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-5">
              <span className="text-4xl font-bold text-activeButton">
                {config.contents.price.price}/month
              </span>
              <button className="bg-primary rounded-md py-4 px-16 text-black uppercase font-medium text-base">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
