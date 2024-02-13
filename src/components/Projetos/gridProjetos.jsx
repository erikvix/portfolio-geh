 import img1 from "../../assets/image3.png";
 import img2 from "../../assets/image4.png";
 import img3 from "../../assets/image5.png";
 import img4 from "../../assets/image6.png";
 import img5 from "../../assets/image7.png";
 import img6 from "../../assets/image8.png";
 import img7 from "../../assets/image9.png";
 import img8 from "../../assets/image10.png";

const gridProjetos = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <img className="rounded-2xl" src={img1} alt="Imagem 1" />
      <img className="rounded-2xl"  src={img2} alt="Imagem 2" />
      <img className="rounded-2xl"  src={img3} alt="Imagem 3" />
      <img className="rounded-2xl"  src={img4} alt="Imagem 4" />
      <img className="rounded-2xl"  src={img5} alt="Imagem 5" />
      <img className="rounded-2xl"  src={img6} alt="Imagem 6" />
      <img className="rounded-2xl"  src={img7} alt="Imagem 7" />
      <img className="rounded-2xl"  src={img8} alt="Imagem 8" />
    </div>
  )
}

export default gridProjetos
