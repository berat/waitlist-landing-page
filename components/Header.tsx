import Image from "next/image";
import Link from "next/link";
// config
import config from "@/config/general";

const Header = () => {
  return (
    <header className="flex-col sm:flex-row flex justify-between items-start">
      <Image src={"/logo.png"} width={80} height={60} alt={config.title} />
      <nav>
        <ul className="flex sm:mt-0 mt-4 items-center lg:gap-7 gap-3 font-medium text-base sm:text-lg">
          {/* <li className="text-black">
            <Link href={config.socials.twitter} passHref legacyBehavior>
              <a
                className="px-5 py-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </Link>
          </li> */}
          <li className="bg-activeButton text-white rounded py-2">
            <Link href={config.subscribeForm} passHref legacyBehavior>
              <a
                className="px-5 py-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                Friendly Neighbourhood Rental
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
