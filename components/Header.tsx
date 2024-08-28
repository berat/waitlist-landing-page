import Image from "next/image";
import Link from "next/link";
// config
import config from "@/config/general";
import logokropp1 from "@/public/logokropp1.png"; // Importing the image

const Header = () => {
  return (
    <header
      className="flex-col sm:flex-row flex justify-between items-center"
      style={{ backgroundColor: "#0d1b2a", marginLeft: "3rem" }}
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={logokropp1} // Using the imported image
            alt="Kropp Logo"
            width={40} // Adjust width as needed
            height={60} // Adjust height as needed
          />
        </Link>
      </div>
      <nav>{/* Add navigation links here if needed */}</nav>
    </header>
  );
};

export default Header;
