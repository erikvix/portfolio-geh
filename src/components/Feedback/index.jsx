import SectionHeader from "../SectionHeader";
import Card from "../Card";

export default function index() {
  return (
    <div className=" p-4 bg-grayc bg-clientes">
      <div className="container mx-auto flex flex-col justify-center items-center ">
      <SectionHeader subTitle='clientes/feedbacks' title="o que meus clientes dizem sobre mim?" desc={null} line={false} />
      <div>
        <Card altCard={true} className='md:last:col-span-2 md:last:mx-auto last:col-span-1 lg:last:col-span-1' />
      </div>
      <h1 className="text-center mt-8 text-gray-400 uppercase italic">
        E muito mais...
      </h1>
      </div>
    </div>
  );
}
