import React from "react";
import SectionHeader from "../SectionHeader";
import { BiSearchAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
export default function index() {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <SectionHeader />
      <div className="grid grid-cols-5 items-baseline">
        <div className="flex flex-col items-center p-4 justify-center gap-4">
          <BiSearchAlt
            size={64}
            color="#fff"
            className="bg-purple rounded-full p-2"
          />
          <h3 className="uppercase text-blackc">Briefing investigador</h3>
          <p className="text-blackc text-center w-[16ch]">
            Análise minuciosa sobre a empresa para que o projeto, a partir das
            respostas do formulário de briefing, saia de acordo com a identidade
            visual da empresa.
          </p>
        </div>
        <svg
          width="178"
          height="24"
          viewBox="0 0 178 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M177.061 13.0607C177.646 12.4749 177.646 11.5251 177.061 10.9393L167.515 1.3934C166.929 0.807611 165.979 0.807611 165.393 1.3934C164.808 1.97919 164.808 2.92893 165.393 3.51472L173.879 12L165.393 20.4853C164.808 21.0711 164.808 22.0208 165.393 22.6066C165.979 23.1924 166.929 23.1924 167.515 22.6066L177.061 13.0607ZM0 13.5H176V10.5H0V13.5Z"
            fill="black"
          />
        </svg>
        <div className="flex flex-col justify-center items-center p-4 gap-4">
          <IoSettingsOutline
            size={64}
            color="#fff"
            className="bg-purple rounded-full p-2"
          />
          <h3 className="uppercase text-blackc text-center">
            desenvolvimento coerente
          </h3>
          <p className="text-blackc text-center w-[16ch]">
            O projeto é desenvolvido com todas as características da empresa e
            de acordo com o as respostas do formulário de briefing, assim,
            atendendo as expectativas do cliente.
          </p>
        </div>
        <svg
          width="178"
          height="24"
          viewBox="0 0 178 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M177.061 13.0607C177.646 12.4749 177.646 11.5251 177.061 10.9393L167.515 1.3934C166.929 0.807611 165.979 0.807611 165.393 1.3934C164.808 1.97919 164.808 2.92893 165.393 3.51472L173.879 12L165.393 20.4853C164.808 21.0711 164.808 22.0208 165.393 22.6066C165.979 23.1924 166.929 23.1924 167.515 22.6066L177.061 13.0607ZM0 13.5H176V10.5H0V13.5Z"
            fill="black"
          />
        </svg>
        <div className="flex flex-col items-center p-4 justify-center gap-4">
          <BiSearchAlt
            size={64}
            color="#fff"
            className="bg-purple rounded-full p-2"
          />
          <h3 className="uppercase text-blackc text-center ">
            apresentação encantadora
          </h3>
          <p className="text-blackc text-center w-[16ch] h-24">
            Uma apresentação padronizada com o visual da empresa, com
            demonstrações do projeto aplicado em mockups e com informações
            técnicas da arte.
          </p>
        </div>
      </div>
    </div>
  );
}
