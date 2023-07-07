import { Agenda } from "@/types/agenda";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConvertDateId from "../DateId/convertDateId";

const SingleTestimonial = ({ testimonial }: { testimonial: Agenda }) => {
  const { name, date, description } = testimonial;
  const dateId = ConvertDateId(date);
  const dateSplit = dateId.split(" ");
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp rounded-md bg-white p-8 pb-10 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="flex items-center">
          <div className="relative mr-4 h-[80px] w-full max-w-[80px]">
            <FontAwesomeIcon icon={["fas", "calendar"]} size="3x" />
            <div
              className="absolute font-bold text-black"
              style={{ fontSize: 25, top: 38 }}
            >
              <div
                className="absolute font-bold text-black"
                style={{ fontSize: 25, top: -26 }}
              >
                <div className="flex min-w-[80px] justify-center">
                  <p className="text-xs">{dateSplit[2]}</p>
                </div>
              </div>
              <div className="flex min-w-[80px] justify-center">
                <h1>{dateSplit[0]}</h1>
              </div>
            </div>
            <div
              className="absolute font-bold text-black"
              style={{ fontSize: 25, bottom: -10 }}
            >
              <div className="flex min-w-[80px] justify-center">
                <p className="text-xs">{dateSplit[1]}</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h5>
            <p className="text-md">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
