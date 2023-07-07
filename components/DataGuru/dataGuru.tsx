import { Guru } from "@/types/guru";

const gender = ["Laki-laki", "Perempuan"];

const dataGuru: Guru[] = [
  {
    id: 1,
    name: "Bapak A",
    jabatan: "Kepala Sekolah",
    image: "/images/guru/guru-01.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorem, officia, consectetur pariatur, eius nisi quidem reiciendis enim quod qui corrupti perferendis alias error minus rerum recusandae? Nesciunt, suscipit laudantium!",
    gender: gender[0],
    birthday: "2002-10-02",
    email: "",
    phone: "",
    address: "",
    status: "",
  },
  {
    id: 2,
    name: "Bapak B",
    jabatan: "Bendahara Sekolah",
    image: "/images/guru/guru-01.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, atque quod? Fuga esse, quidem nemo facere cumque vero ducimus. Obcaecati dolores quae quo fuga, reprehenderit et quos repellendus ea illum.",
    gender: gender[0],
    birthday: "2002-01-05",
    email: "",
    phone: "",
    address: "",
    status: "",
  },
  {
    id: 3,
    name: "Bapak C",
    jabatan: "",
    image: "/images/guru/guru-01.jpg",
    description: "",
    gender: gender[0],
    birthday: "2003-01-06",
    email: "",
    phone: "",
    address: "",
    status: "",
  },
];

export default dataGuru;
