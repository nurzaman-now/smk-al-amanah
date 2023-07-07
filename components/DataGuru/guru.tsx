"use client"; // This is a client component
import { Guru } from "@/types/guru";
import Image from "next/image";
import { useState } from "react";
import ConvertDateId from "../DateId/convertDateId";

const ModalGuru = ({ guru }: { guru: Guru }) => {
  const [showModal, setShowModal] = useState(false);
  const birthday = ConvertDateId(guru.birthday);
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white text-black shadow-one"
        data-wow-delay=".1s"
      >
        <div className="cursor-pointer" onClick={() => setShowModal(true)}>
          <div className="relative flex h-[220px] w-full justify-center bg-black/50">
            <Image src={guru.image} alt="image" height={220} width={220} />
          </div>
          <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
            <h3>{guru.name}</h3>
            <p className="text-xs text-body-color">{guru.jabatan}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full">
            {showModal ? (
              <>
                <div className="fixed inset-0 z-50 overflow-y-auto">
                  <div
                    className="opacity-6 fixed inset-0 h-full w-full bg-black bg-opacity-60 backdrop-blur backdrop-filter"
                    onClick={() => setShowModal(false)}
                  ></div>
                  <div className="flex min-h-screen items-center px-4 py-8">
                    <div className="relative mx-auto w-full max-w-lg rounded-md bg-white p-3 shadow-lg">
                      <div className="relative flex h-[220px] w-full justify-center bg-black/50">
                        <Image
                          src={guru.image}
                          alt="image"
                          height={220}
                          width={220}
                        />
                      </div>
                      <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                        <p className="my-1 text-lg font-bold">{guru.name}</p>
                        <p className="text-md my-1">{guru.email}</p>
                        <p className="text-md my-1">{guru.jabatan}</p>
                        <p className="my-1 text-xs">{birthday}</p>
                        <p className="my-1 text-xs">{guru.gender}</p>
                        <p className="my-1 text-xs">{guru.address}</p>
                        <p className="my-1 text-xs text-body-color">
                          {guru.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalGuru;
