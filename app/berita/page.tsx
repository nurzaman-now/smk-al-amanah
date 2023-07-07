"use client";
import { useState } from "react";
import SingleBerita from "@/components/Berita/SingleBerita";
import beritaData from "@/components/Berita/beritaData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const ViewBerita = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Set the number of items per page

  // Filter the berita data based on the search query
  const filteredBeritaData = beritaData.filter((berita) =>
    berita.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredBeritaData.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentBeritaData = filteredBeritaData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
      <Breadcrumb
        pageName="Berita Sekolah"
        description="Berbagai berita tentang SMK ISLAM AL AMANAH SALEM"
      />

      {/* Search input field */}
      <div className="w-full text-center">
        <input
          type="text"
          placeholder="Search Berita"
          className="border-gray-300 w-2/5 rounded-md border border-body-color bg-white px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-primary"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {currentBeritaData.map((blog, index) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBerita blog={blog} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </button>
                </li>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <li key={index} className="mx-1">
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className={`flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white ${
                        currentPage === index + 1 ? "font-bold" : ""
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li className="mx-1">
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewBerita;
