import config from "@/config/general";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-start">
      <Image src={"/logo.svg"} width={180} height={60} alt={config.title} />
      <nav>
        <ul className="flex items-center lg:gap-7 gap-3 font-medium text-lg">
          <li className="text-black">
            <Link href={config.socials.twitter} passHref legacyBehavior>
              <a
                className="px-5 py-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </Link>
          </li>
          <li className="bg-activeButton text-white rounded py-2">
            <Link href={config.subscribeForm} passHref legacyBehavior>
              <a
                className="px-5 py-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
