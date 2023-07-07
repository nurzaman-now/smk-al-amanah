import React from "react";
import SectionTitle from "../Common/SectionTitle";
import dataGuru from "./dataGuru";
import ModalGuru from "./guru";

const ViewDataGuru = () => {
  return (
    <>
      <section id="guru" className="bg-primary/5 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Guru"
            paragraph="Data data guru di SMK Islam Al Amanah"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            <>
              {dataGuru.map((guru, index) =>
                index < 3 ? <ModalGuru key={guru.id} guru={guru} /> : null
              )}
            </>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewDataGuru;
