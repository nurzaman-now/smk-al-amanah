import SectionTitle from "../Common/SectionTitle";
import SingleBerita from "./SingleBerita";
import beritaData from "./beritaData";

const Berita = () => {
  return (
    <section id="berita" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Berita Sekolah Terkini"
          paragraph="Berita Terbaru Di SMK ISLAM AL AMANAH SALEM"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {beritaData.map((blog, index) =>
            index < 3 ? (
              <div key={blog.id} className="w-full">
                <SingleBerita blog={blog} />
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Berita;
