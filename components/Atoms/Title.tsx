"use client";

interface TitleProps {
  label: string;
}

const Title: React.FC<TitleProps> = ({ label }) => {
  return (
    <div className="relative center w-fit mx-auto mb-16">
      <span className="absolute mw-[150%] h-[5px] bg-primary rounded top-3 -left-1 -right-1 z-10" />
      <h2 className="text-[1.1rem] xl:text-2xl font-semibold uppercase relative z-20">{label}</h2>
    </div>
  );
};
export default Title;
