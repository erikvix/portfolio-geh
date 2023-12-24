import React from "react";
import { BsWindowFullscreen } from "react-icons/bs";

export default function Card() {
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
