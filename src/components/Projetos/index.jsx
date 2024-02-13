import SectionHeader from "../SectionHeader";
import Button from "../Button";
import GridProjetos from "./gridProjetos";

export default function index() {
  return (
    <div className="w-full p-10">
     <div className="flex flex-col justify-center items-center">
          <SectionHeader
              subTitle="portfólio"
              title="dê uma olhada noS meuS TRABALHOS!"
              desc=""
            />

        <GridProjetos/>
        <Button className="relative mt-10 xl:bottom-5 bg-purple uppercase py-2 px-16 text-2xl text-white rounded-[2rem]">
        ver mais
      </Button>
     </div>
      
    </div>
  );
}
