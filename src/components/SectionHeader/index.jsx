import React from "react";

export default function index({
  subTitle = "Serviços",
  title = "serviços especializados",
  desc = "Projetos feito sob encomenda e com prazo de entrega de até um mês",
}) {
  return (
    <div className="flex flex-col justify-center items-center m-8 ">
      <span className="text-purple text-2xl uppercase">{subTitle}</span>
      <h1 className="text-4xl uppercase">{title}</h1>
      <p className="text-black text-base">{desc}</p>
      <div className="border-lightPurple border-b mt-8 w-80"></div>
    </div>
  );
}
