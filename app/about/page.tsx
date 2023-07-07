import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutSection from "@/components/Jurusan";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSection />
    </>
  );
};

export default AboutPage;
