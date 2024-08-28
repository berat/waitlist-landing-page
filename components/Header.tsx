import Image from "next/image";
import Link from "next/link";
// config
import config from "@/config/general";

const Header = () => {
  return (
    <header
      className="flex-col sm:flex-row flex justify-between items-center"
      style={{ backgroundColor: "#0d1b2a",  marginLeft: '3rem', }}
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logokropp1.png" // Path to your logo image
            alt="Kropp Logo"
            width={40} // Adjust width as needed
            height={60} // Adjust height as needed
          />
        </Link>
      </div>
      <nav>
        {/* Add navigation links here if needed */}
      </nav>
    </header>
  );
};

export default Header;
