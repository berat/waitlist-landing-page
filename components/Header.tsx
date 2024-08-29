import Image from "next/image";
import Link from "next/link";
import logoKropp2 from "@/public/logokropp2.png"; // Importing the image

const Header = () => {
  return (
    <header
      className="flex-col sm:flex-row flex justify-between items-center"
      style={{
        backgroundColor: "#ffffff",
        marginLeft: "0rem",
        paddingLeft: "1rem",
      }}
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={logoKropp2} // Using the imported image
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
