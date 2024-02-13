import avatar from "../../assets/avatar.png";

export default function index() {
  return (
    <section className="bg-grayc bg-sobre">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-lg  lg:order-first lg:h-full">
            <img
              alt="Avatar"
              src={avatar}
              className="mx-auto"
            />
          </div>

          <div className="lg:py-24 text-center">
            <span className="text-purple uppercase">Sobre mim</span>
            <h2 className="text-xl md:text-3xl font-bold sm:text-5xl uppercase">
              transformando <br className="" /> arte em resultados
            </h2>
            <p className="mt-4 text-base md:text-lg leading-5 text-black">
              Sou apaixonada por arte, cultura pop e design, e por isso, me
              graduei em design gráfico e comunicação visual e estou muito feliz
              e realizada trabalhando nesta área.
            </p>
            <p className="mt-4 text-base md:text-lg leading-5 text-black">
              Busco converter o público em clientes através de artes
              encantadoras, estratégicas e chamativas.
            </p>
            <p className="mt-4 text-base md:text-lg leading-5 text-black">
              Já atendi mais de 50 empresas por todo o Brasil, desenvolvendo
              projetos visuais para seus negócios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
