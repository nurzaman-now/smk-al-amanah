import jurusanData from "./JurusanData";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import List from "./List";
import { Jurusan } from "@/types/jurusan";

const AboutSectionOne = ({ jurusan }: { jurusan: Jurusan }) => {
  const { title, paragraph, list, image } = jurusan;

  return (
    <section id="jurusan" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle title={title} paragraph={paragraph} mb="44px" />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <>
                      {list.map((title, index) => {
                        return index < 3 ? <List text={title} /> : <></>;
                      })}
                    </>
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <>
                      {list.map((title, index) => {
                        return index > 2 ? <List text={title} /> : <></>;
                      })}
                    </>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src={image}
                  alt={title + "-image"}
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSectionTwo = ({ jurusan }: { jurusan: Jurusan }) => {
  const { title, paragraph, list, image } = jurusan;

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image src={image} alt={title + " image"} fill />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle title={title} paragraph={paragraph} mb="44px" />

            <div
              className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
              data-wow-delay=".15s"
            >
              <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <>
                    {list.map((title, index) => {
                      return index < 3 ? <List text={title} /> : <></>;
                    })}
                  </>
                </div>

                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <>
                    {list.map((title, index) => {
                      return index > 2 ? <List text={title} /> : <></>;
                    })}
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <>
      {jurusanData.map((jurusan, index) => {
        return index % 2 === 0 ? (
          <AboutSectionOne jurusan={jurusan} />
        ) : (
          <AboutSectionTwo jurusan={jurusan} />
        );
      })}
    </>
  );
};

export default AboutSection;
