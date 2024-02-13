
import { BsWindowFullscreen } from "react-icons/bs";


const data = [
  {
    id: 1,
    nome: 'Daniel Vitor',
    social:'@kintsukuroiy',
    avatar: '/daniel.png',
    review: 'A Gegeh entendeu super bem e fez tudo do jeitinho que eu estava imaginando, até superando minhas expectativas, sendo necessário poucas mudanças e tudo foi feito em um tempo extremamente curto. Com certeza estarei retornando a ela sempre que eu precisar de mais artes/banners para ser feito. Super recomendo!'
  },
  {
    id: 2,
    nome: 'Maria Neto',
    social:'@marianetto17',
    avatar: '/maria.png',
    review: 'Eu amei as artes que a Geovana fez para mim, ela conseguiu desenvolver um logotipo para o meu salão exatamente do jeitinho que eu queria. E também fez um lindo carrossel promocional para o meu salão, eu amei demais, ela é muito talentosa. Ela é tão profissional que gostaria de trabalhar com ela pessoalmente!'
  },
  {
    id: 3,
    nome: 'Marco Lambert',
    social:'@marianetto17',
    avatar: '/marco.png',
    review: 'Foi show demais! Gostei muito do trabalho da Geovana, solicitei a ela alguns criativos para tráfego pago e me surpreendi com a qualidade e criatividade do projeto tanto que acabei solicitando mais projetos, como selo, capa para Facebook e logotipo. Com certeza solicitarei mais demandas com ela!'
  },
]
import { FaStar } from "react-icons/fa6";

export default function Card({ altCard = false, className}) {
  if (altCard) {
    return (
      <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5`}>
        
        {data.map((item) => (
          <div className={`z-10 w-[355px] bg-white shadow-lg rounded-3xl p-8 ${className ? className : ''}`} key={item.id}>
            <div className="flex items-center gap-4">
            <div>
              <img
                className="relative rounded-full object-cover w-12 h-12 -top-2"
                src={item.avatar}
                alt={item.nome}
              />
            </div>
            <div>
              <h1 className="text-2xl leading-4 uppercase">{item.nome}</h1>
              <p className="text-lg text-gray-400 uppercase">{item.social}</p>
            </div>
          </div>
          <div className="flex gap-1 mt-1">
          <FaStar size={24} color="#fbbf24" />
          <FaStar size={24} color="#fbbf24" />
          <FaStar size={24} color="#fbbf24" />
          <FaStar size={24} color="#fbbf24" />
          <FaStar size={24} color="#fbbf24" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-black text-lg mt-1 leading-none">
           {item.review}
          </p>
        </div>
          </div>
     
        ))}
        
        </div>
        
    );
  } else {
    return (
      <div className={`flex flex-col justify-center items-center gap-4 z-10 w-[200px] h-[200px] shadow-lg rounded-xl bg-grayc ${className}`}>
        <div className="bg-purple flex items-end flex-col rounded-full w-14 h-14">
          <BsWindowFullscreen size={32} />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1>Web Design</h1>
          <p className="text-blackc max-w-[18ch] text-center">
            Wireframe para sites e aplicativos.
          </p>
        </div>
      </div>
    );
  }
}
