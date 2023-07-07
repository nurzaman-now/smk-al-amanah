import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="visiMisi"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Visi"
            width="60vw"
            center
            paragraph="Mewujudkan lembaga pendidikan kejuruan yang unggul dibidang teknologi, dengan prinsip budaya Edukatif, Mandiri, Disiplin, Profesional, Beriman seutuhnya, Berilmu wawasan yang luas, dan Optimal dalam Beramal."
          />

          <div
            className={"wow fadeInUp w-full"}
            data-wow-delay=".1s"
            style={{ maxWidth: "100vw", marginBottom: "100px" }}
          >
            <h2 className="mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Misi
            </h2>
            <ol style={{ marginLeft: "100px", marginRight: "100px" }}>
              <li className="text-base !leading-relaxed text-body-color md:text-lg">
                Untuk mewujudkan visi tersebut SMK Islam Al Amanah memiliki misi
                sebagai berikut :
              </li>
              <li className="text-base !leading-relaxed text-body-color md:text-lg">
                1. Menjadikan ajaran-ajaran dan nilai-nilai Islam sebagai
                pandangan hidup, sikap hidup dan keterampilan hidup dalam
                kehidupan sehari-hari.
              </li>
              <li className="text-base !leading-relaxed text-body-color md:text-lg">
                2. Menjadikan SMK unggul dalam berfikir, berdzikir, peduli,
                terampil, dan berakhlakul karimah
              </li>
              <li className="text-base !leading-relaxed text-body-color md:text-lg">
                3. Menghasilkan tamatan yang handal mandiri, disiplin,
                profesional, dan kompetitif berorientasi pada keunggulan dengan
                memperhatikan potensi kekinian dengan sistem pembelajaran
                berbasis IT.
              </li>
              <li className="text-base !leading-relaxed text-body-color md:text-lg">
                4. Menciptakan Lingkungan belajar yang sistematis, terencana,
                terarah dan partisipasi aktif individu (Edukatif)
              </li>
              <li className="text-base !leading-relaxed text-body-color md:text-lg">
                5. Memiliki kemandirian, kemampuan beradaptasi dan survive di
                lingkungannya (Mandiri)
              </li>
              <li className="text-base !leading-relaxed text-body-color md:text-lg">
                6. Menjunung tinggi panca disiplin sekolah (Disiplin Waktu,
                Disiplin Akhlaq, Disiplin Beribadah, Disiplin Berpakain,
                Disiplin Lingkungan)
              </li>
              <li className="text-base !leading-relaxed text-body-color md:text-lg">
                7. Meningkatan profesionalisme Pendidik dan Tenaga kependidikan
                dalam pelayanan maksimal pada kegiatan pembelajaran dan
                pengembangan diri untuk menciptakan budaya mutu secara kreatif,
                inovatif dan Produktif. (Profesional)
              </li>
            </ol>
          </div>

          <div
            id="profil"
            className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
