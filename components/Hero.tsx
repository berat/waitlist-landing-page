import Image from "next/image";

const Hero = () => {
  return (
    <section className="xl:flex-row flex-col flex items-center justify-center gap-14">
      <div className="xl:w-5/12 w-11/12 xl:my-40 mt-40 flex flex-col gap-6">
        <h1 className="min-w-[300px] xl:min-w-[490px] xl:w-10/12 w-8/12 font-normal text-4xl text-black relative z-40">
          Discover Your Ideal Experience with
          <span className="bg-primary whitespace-nowrap inline-block ml-1 absolute px-2 w-[fit-content] bottom-[12px] leading-[8px] text-black rounded h-3">
            The Product
          </span>
        </h1>
        <span className="font-light text-2xl text-black">
          Step into a realm of possibilities with The Product. Immerse yourself
          in a shopping journey where intuitive features and cutting-edge design
          come together to enhance your every selection.
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
        className="rounded-sm xl:w-6/12 xl:max-w-[648px] w-11/12 h-max"
      />
    </section>
  );
};

export default Hero;
