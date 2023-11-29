import config from "@/config/general";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white mx-20 my-20 p-12 rounded">
      <Image src={"/logo.svg"} width={227} height={40} alt={config.title} />
      <nav>
        <li>Twitter</li>
        <li>Register</li>
      </nav>
    </main>
  );
}
