import { Feature } from "@/types/feature";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add the Font Awesome icons to the library
library.add(fas);

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={["fas", "medal"]} width={50} height={50} />,
    title: "Terakreditasi B",
    paragraph:
      "SMK Islam Al Amanah Salem Telah Diakui Oleh Pemerintah Sebagai Sekolah Menengah Kejuruan Dengan Kualitas Baik Sekali",
  },
  {
    id: 2,
    icon: (
      <FontAwesomeIcon icon={["fas", "book-bookmark"]} width={50} height={50} />
    ),
    title: "Kurikulum Merdeka & 2013 Revisi",
    paragraph:
      "Kurikulum Merdeka berfokus pada materi yang esensial dan pengembangan karakter Profil Pelajar Pancasila. Kurikulum 2013 Revisi adalah penyempurnaan atau perubahan yang dilakukan pada Kurikulum 2013, yang sebelumnya telah diterapkan di Indonesia.",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={["fas", "building"]} width={50} height={50} />,
    title: "Fasilitas Yang Memadai",
    paragraph:
      "SMK Islam Al Amanah Salem memiliki fasilitas yang memadai. Fasilitas yang memadai di sekolah dapat memberikan lingkungan belajar yang baik dan mendukung bagi siswa untuk mengembangkan potensi mereka.",
  },
];
export default featuresData;
