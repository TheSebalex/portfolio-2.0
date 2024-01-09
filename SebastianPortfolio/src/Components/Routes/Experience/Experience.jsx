import React from "react";

export function Experience() {
  const jobs = [{}, {}, {}, {}, {}];

  return (
    <>
      <div className="w-full h-[85vh]">
        <section className="h-full p-4 lg:p-8 lg:px-12 font-mono w-full overflow-y-auto">
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
        </section>
      </div>
    </>
  );
}
