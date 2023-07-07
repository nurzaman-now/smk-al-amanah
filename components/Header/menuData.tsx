import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "Visi & Misi",
        path: "visiMisi",
        newTab: false,
        scroll: true,
      },
      {
        id: 12,
        title: "Profil Sekolah",
        path: "profil",
        newTab: false,
        scroll: true,
      },
    ],
  },
  {
    id: 2,
    title: "Program Keahlian",
    path: "jurusan",
    newTab: false,
    scroll: true,
  },
  {
    id: 3,
    title: "Guru",
    path: "guru",
    newTab: false,
    scroll: true,
  },
  {
    id: 4,
    title: "Pengumuman",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Agenda",
        path: "agenda",
        newTab: false,
        scroll: true,
      },
      {
        id: 42,
        title: "Berita",
        path: "/berita",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "PPDB",
    path: "/ppdb",
    newTab: false,
  },
  {
    id: 6,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/berita-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
