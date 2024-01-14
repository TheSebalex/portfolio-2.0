import React from "react";
import { jobs } from "./Jobs";

export function Experience() {


  return (
    <>
      <div className="w-full h-[85vh]">
        <section className=" bg-white h-full p-4 lg:p-8 lg:px-12 font-mono w-full overflow-y-auto">
          <h1 className="text-3xl font-black mt-2 ml-4 flex gap-4 items-center">
            Experiencia laboral
            <box-icon name="trending-up"></box-icon>
          </h1>
          <div className="flex flex-col gap-5">
            <p className="text-lg mt-2 ml-2 font-mono">
              Me especializo en crear aplicaciones web dinámicas y responsivas,
              tanto para el frontend como para el backend y en el desarrollo de
              aplicaciones de escritorio en lenguajes de programacion como
              Visual Basic y C#, consumiendo ademas diversas librerias para el consumo de hardware como: Dispositivos RFID, Impresoras Fiscales, Tickeras, etc.
            </p>
            <p className="text-lg mt-2 ml-2 font-mono">
              He trabajado en varios proyectos personales y freelance, así como
              en empresas nacionales del sector IT.
            </p>
            <p className="text-lg mt-2 ml-2 font-mono">
              Me apasiona el desarrollo porque me permite crear soluciones
              innovadoras y creativas para los problemas del mundo real. Me
              gusta aprender nuevas tecnologías y herramientas, y estar al día
              con las tendencias y buenas prácticas del sector.
            </p>
          </div>
          <ul className="flex flex-col gap-5 my-10">
            {jobs.map((item, index) => (<li key={index}>
              <JobItem info={item} />
            </li>))}
          </ul>
        </section>
      </div>
    </>
  );
}

export function JobItem({info, key}){
  
  return (<>
    <div className="drop-shadow-md gap-2 flex flex-col bg-gradient-to-tr from-cyan-200/70 to-sky-500/50 p-5 rounded-xl">
      <h1 className="lg:flex grid grid-cols-2 gap-4 ml-2 text-lg font-black break-words">
        {info.title}
        <span className="break-words italic my-auto   py-2 justify-center text-center leading-none font-medium font-mono bg-sky-600 text-white font rounded-lg px-2">
          {info.site}
        </span>
      </h1>
      <h2 className="text-md italic p-[1px] px-[5px] bg-slate-600 text-white rounded-lg flex w-auto m-auto ml-0">
        {info.act}
      </h2>
      <p className="font-sans">
        {info.desc}
      </p>
    </div>
</>)
}