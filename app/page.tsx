import { About, Hero, Header, Price, Faq, HowWorks, Footer } from "@/components";

export default function Home() {
  return (
    <main className="lg:mt-4  lg:p-10 bg-white mt-4 mx-4 p-8 mb-4 lg:mb-4 rounded">
      <Header />
      <Hero />
      {/* <About />
      <HowWorks />
      <Price />
      <Faq />
      <Footer /> */}
    </main>
  );
}
