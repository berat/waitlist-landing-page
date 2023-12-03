import Link from "next/link";

const Footer = () => {
  return (
    <footer className="lg:mt-8 lg:mx-16 lg:mb-20 lg:px-12 px-8 py-4 text-black">
      © 2023 -
      <Link
        href="https://twitter.com/beratbozkurt0/status/1699164095994372577"
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
    </footer>
  );
};

export default Footer;
