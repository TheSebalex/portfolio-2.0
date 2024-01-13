import { useState } from "react";
import { projects } from "./Projects";

export function Portfolio() {
  return (
    <>
      <div className="w-full h-[85vh]">
        <section className="h-full p-4 lg:p-8 lg:px-12 font-mono w-full overflow-y-auto">
          <h1 className="text-3xl font-black mt-2 ml-4 flex gap-4 items-center">
            Portafolio
            <box-icon name="briefcase"></box-icon>
          </h1>
          <div>
            <p>
              Estos son algunos de los proyectos personales en los que he
              trabajado, y tambien algunos proyectos en los que me he
              desempeñado de forma freelance, ajustandome a los requerimientos
              del cliente y a mis personales del proyecto en si.
            </p>
            <ul className="grid place-center sm:grid-cols-2 md:grid-cols-3 gap-4 py-8 text-center max-w-[1280px]">
              {projects.map((item, index) => (
                <ProjectItem info={item} key={index} />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export function ProjectItem({ info }) {
  const [deployDetail, setDeployDetail] = useState(false);

  return (
    <>
      <li
        className="w-full border-[1px] border-slate-200 rounded-lg overflow-hidden cursor-pointer"
        onClick={() => setDeployDetail(!deployDetail)}
      >
        <img src={info.imageTitle} className="object-cover border-b-[1px] border-slate-200 bg-black w-full h-48" />
        <h3 className="text-lg font-black">{info.title}</h3>
      </li>
      {deployDetail && (
        <ProjectDetail info={info} close={() => setDeployDetail(false)} />
      )}
    </>
  );
}

export function ProjectDetail({ info, close }) {
  const gallery = [info.imageTitle, ...info.gallery];
  const [current, setCurrent] = useState(0);

  const handleSlide = (dir) => {
    if (gallery[current + dir]) {
      setCurrent(current + dir);
    }
  };

  return (
    <>
      <div className="p-6 flex flex-col scrollbar overflow-auto items-center fixed top-0 bottom-0 left-0 right-0 bg-black/80">
        <div className="lg:w-[80%] max-w-[1280px]">
          <div className="flex w-full cursor-pointer" onClick={close}>
            <box-icon name="x" color="#ffffff" size="md"></box-icon>
          </div>
          <div className="flex max-w-[100%] justify-center py-8">
            <div
              className="flex flex-col justify-center cursor-pointer"
              onClick={() => handleSlide(-1)}
            >
              <box-icon name="chevron-left" color="#ffffff"></box-icon>
            </div>
            <img
              className="rounded-lg object-contain bg-zinc-800 w-[90%] max-h-[512px] h-[40vw]"
              src={gallery[current]}
            />
            <div
              className="flex flex-col justify-center cursor-pointer"
              onClick={() => handleSlide(1)}
            >
              <box-icon name="chevron-right" color="#ffffff"></box-icon>
            </div>
          </div>
          <div className="flex justify-end h-8">
            <p className="bg-white p-2 leading-none font-black w-8 rounded-full">
            {current+1}
            </p>
          </div>
          <p className="text-white text-lg py-8">{info.desc}</p>
          <h1 className="text-yellow-300 bg-zinc-800 border-[1px] border-zinc-700 py-2 w-[80%] flex rounded-xl mx-auto justify-center italic">
            {info.tech}
          </h1>
        </div>
        <div></div>
      </div>
    </>
  );
}
