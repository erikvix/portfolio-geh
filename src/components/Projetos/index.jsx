import React from "react";
import SectionHeader from "../SectionHeader";
// import img1 from "../../assets/image3.png";
// import img2 from "../../assets/image4.png";
// import img3 from "../../assets/image5.png";
// import img4 from "../../assets/image6.png";
// import img5 from "../../assets/image7.png";
// import img6 from "../../assets/image8.png";
// import img7 from "../../assets/image9.png";
// import img8 from "../../assets/image10.png";
import imgProjetos from '../../assets/projetos.png'
import Button from "../Button";

export default function index() {
  return (
    <div className="w-full h-screen p-10">
     <div className="flex flex-col justify-center items-center">
          <SectionHeader
              subTitle="portfólio"
              title="dê uma olhada noS meuS TRABALHOS!"
              desc=""
            />

        <img className="" src={imgProjetos} alt="" />
        <Button className="relative bottom-5 bg-purple uppercase py-2 px-16 text-2xl text-white rounded-[2rem]">
        ver mais
      </Button>
     </div>
      
    </div>
  );
}
