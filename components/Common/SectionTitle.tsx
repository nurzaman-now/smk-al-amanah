const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  centerTitle,
  right,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  centerTitle?: boolean;
  right?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : right ? "mx-auto text-right" : ""
          }`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2
          className={`mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] ${centerTitle ? "text-center" : ""
            }`}
        >
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
