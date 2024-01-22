import React from "react";
import SectionHeader from "../SectionHeader";
import img1 from "../../assets/image3.png";
import img2 from "../../assets/image4.png";
import img3 from "../../assets/image5.png";
import img4 from "../../assets/image6.png";
import img5 from "../../assets/image7.png";
import img6 from "../../assets/image8.png";
import img7 from "../../assets/image9.png";
import img8 from "../../assets/image10.png";

export default function index() {
  return (
    <div className="max-w-screen-xl mx-auto p-4 h-screen">
      <SectionHeader
        subTitle="portfólio"
        title="dê uma olhada noS meuS TRABALHOS!"
        desc=""
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 border h-screen">
        <div>
          <img className="rounded-[2.2rem]" src={img1} alt="" />
        </div>
        <div>
          <img className="rounded-[2.2rem]" src={img2} alt="" />
        </div>
        <div>
          <img className="rounded-[2.2rem]" src={img3} alt="" />
        </div>
        <div>
          <img className="rounded-[2.2rem]" src={img4} alt="" />
        </div>
        <div>
          <img className="rounded-[2.2rem]" src={img4} alt="" />
        </div>
      </div>
    </div>
  );
}
