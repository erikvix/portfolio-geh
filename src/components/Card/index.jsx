import React from "react";
import { BsWindowFullscreen } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

export default function Card({ altCard = false }) {
  if (altCard) {
    return (
      <div className="flex flex-col  gap-4 z-10 w-[350px] h-[350px] shadow-lg rounded-xl bg-grayc p-8">
        <div className="flex items-center gap-4">
          <div>
            <img
              className="relative rounded-full object-cover w-12 h-12"
              src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl leading-4 uppercase">Daniel Vitor</h1>
            <p className="text-lg text-gray-600">@kintsukuroiy</p>
          </div>
        </div>
        <div className="flex gap-1">
          <FaStar size={24} color="#fbbf24" />
          <FaStar size={24} color="#fbbf24" />
          <FaStar size={24} color="#fbbf24" />
          <FaStar size={24} color="#fbbf24" />
          <FaStar size={24} color="#fbbf24" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-blackc border border-cyan-400 text-sm">
            A Gegeh entendeu super bem e fez tudo do jeitinho que eu estava
            imaginando, até superando minhas expectativas, sendo necessário
            poucas mudanças e tudo foi feito em um tempo extremamente curto. Com
            certeza estarei retornando a ela sempre que eu precisar de mais
            artes/banners para ser feito. Super recomendo!
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center gap-4 z-10 w-[200px] h-[200px] shadow-lg rounded-xl bg-grayc">
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
