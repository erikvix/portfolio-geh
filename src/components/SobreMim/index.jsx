import React from "react";
import avatar from "../../assets/avatar.png";

export default function index() {
  return (
    <section className="bg-grayc">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-10">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
            <img
              alt="Party"
              src={avatar}
              class="absolute -top-16 right-20 h-[550px] w-[440px]"
            />
          </div>

          <div class="lg:py-24">
            <span className="text-purple uppercase">Sobre mim</span>
            <h2 class="text-3xl font-bold sm:text-4xl uppercase">
              transformando arte em resultados
            </h2>
            <p className="mt-4 text-blackc">
              Sou apaixonada por arte, cultura pop e design, e por isso, me
              graduei em design gráfico e comunicação visual e estou muito feliz
              e realizada trabalhando nesta área.
            </p>
            <p class="mt-4 text-blackc">
              Busco converter o público em clientes através de artes
              encantadoras, estratégicas e chamativas.
            </p>
            <p class="mt-4 text-blackc">
              Já atendi mais de 50 empresas por todo o Brasil, desenvolvendo
              projetos visuais para seus negócios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
