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
import Button from "../Button";

export default function index() {
  return (
    <div className="max-w-screen-xl mx-auto p-4 h-screen relative">
      <SectionHeader
        subTitle="portfólio"
        title="dê uma olhada noS meuS TRABALHOS!"
        desc=""
      />
      <div className="grid grid-cols-4 lg:gap-8 grid-rows-3 h-screen">
        <div>
          <img className="rounded-[2.2rem] w-[300px]" src={img1} alt="" />
        </div>
        <div>
          <img className="rounded-[2.2rem] w-[300px]" src={img2} alt="" />
        </div>
        <div>
          <img className="rounded-[2.2rem] w-[300px]" src={img3} alt="" />
        </div>
        <div>
          <img className="rounded-[2.2rem] w-[300px]" src={img4} alt="" />
        </div>
        <div>
          <img className="rounded-[2.2rem] w-[300px]" src={img5} alt="" />
        </div>
        <div>
          <img className="rounded-[2.2rem] w-[300px]" src={img6} alt="" />
        </div>
        <div>
          <img className="rounded-[2.2rem] w-[300px]" src={img7} alt="" />
        </div>
        <div>
          <img className="rounded-[2.2rem] w-[300px]" src={img8} alt="" />
        </div>
      </div>
      <Button className="absolute right-560 -botton-20 bg-purple uppercase py-2 px-10 text-2xl text-white rounded-[2rem]">
        ver mais
      </Button>
    </div>
  );
}
