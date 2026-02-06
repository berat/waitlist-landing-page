"use client";
import config from "@/config/general";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-15">
      <div className="bg-grayBackground rounded-md">
        <div className="w-11/12 xl:w-[1050px] mx-auto flex md:flex-row flex-col justify-between md:gap-0 gap-12 items-start py-16">
          <div className="flex flex-col gap-2">
            <Image
              src={"/logo.svg"}
              width={180}
              height={60}
              alt={config.title}
            />
            <p className="w-[300px] text-activeButton">{config.description}</p>
          </div>
          <div>
            <span className="uppercase text-[#8d8d8d] font-semibold">
              Links
            </span>
            <ul className="font-medium flex flex-col gap-2 mt-4 text-activeButton">
              <li>How it works</li>
              <li>Price</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <span className="uppercase text-[#8d8d8d] font-semibold">
              Legal
            </span>
            <ul className="font-medium flex flex-col gap-2 mt-4 text-activeButton">
              <li>Terms of services</li>
              <li>Privact policy</li>
            </ul>
          </div>
        </div>
        <div className="w-11/12 xl:w-[1050px] mx-auto pb-16">
          © 2023 -
          <Link
            href="https://twitter.com/beratbuilds"
            passHref
            legacyBehavior
          >
            <a
              target="_blank"
              className="underline underline-offset-2"
              rel="noopener noreferrer"
            >
              #buildinpublic
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
