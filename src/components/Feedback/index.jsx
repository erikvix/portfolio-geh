import React from "react";
import SectionHeader from "../SectionHeader";
import Card from "../Card";

export default function index() {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <SectionHeader />
      <div className="flex justify-evenly items-center">
        <Card altCard={true} />
        <Card altCard={true} />
        <Card altCard={true} />
      </div>
      <h1 className="text-center mt-8 text-gray-400 uppercase">
        E muito mais...
      </h1>
    </div>
  );
}
