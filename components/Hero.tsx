import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center justify-center gap-14">
      <div className="w-5/12 my-40 flex flex-col gap-6">
        <h1 className="font-normal text-4xl text-black relative z-40">
          {"Let's"} Convert Text to{" "}
          <span className="bg-primary ml-1 px-2 absolute w-[fit-content] top-[17px] leading-[8px] text-black rounded h-3">
            Emoji
          </span>
          {/* <span className="absolute right-[225px] top-[32px]">
            <Image
              src="/draw.svg"
              alt="logo"
              width={216}
              height={16}
            />
          </span> */}
          {/* <div className="absolute h-[2px] w-52 bg-primary top-[36px] right-1 z-20" /> */}
        </h1>
        <span className="font-light text-2xl text-black">
          Elevate your texts with the perfect emojis. Usemoji.app is coming
          soon! Join the waiting list for updates and exclusive access.
        </span>
        <form>
          <div className="relative">
            <div className="min-w-0 flex-1">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="fields[email]"
                autoComplete="email"
                aria-invalid="false"
                id="email"
                placeholder="Enter your email"
                className="form-control block w-full rounded-sm bg-gray px-4 py-5 text-base text-black placeholder-gray-500 focus:outline-none"
                // value={mail}
                // onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="absolute right-2 top-2 w-auto block  rounded-sm bg-activeButton py-3 px-4 font-medium text-white shadow hover:bg-activeButton"
                // disabled={loading}
              >
                Join Waitlist
              </button>
            </div>
          </div>
          {/* <span className="text-sm italic text-gray-500">{message}</span> */}
        </form>
      </div>
      <Image
        src="/hero.jpg"
        alt="hero"
        width={648}
        height={500}
        className="rounded-sm"
      />
    </section>
  );
};

export default Hero;
