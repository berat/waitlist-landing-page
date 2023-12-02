import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-8 mx-16 mb-20 px-12 text-black">
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
