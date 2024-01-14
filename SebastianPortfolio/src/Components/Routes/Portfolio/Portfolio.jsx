import { useEffect, useRef, useState } from "react";
import { projects } from "./Projects";

export function Portfolio() {
  return (
    <>
      <div className="w-full h-[85vh]">
        <section className="h-full p-4 bg-white lg:p-8 lg:px-12 font-mono w-full overflow-y-auto">
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
            <ul className="grid place-center sm:grid-cols-2 gap-4 py-8 text-center max-w-[1280px]">
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
        className="w-full border-[1px] border-slate-400 rounded-lg overflow-hidden cursor-pointer"
        onClick={() => setDeployDetail(!deployDetail)}
      >
        <img
          src={info.imageTitle}
          loading="lazy"
          className="object-cover border-b-[1px] border-slate-200 bg-black w-full max-h-72 min-h-36"
        />
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
  const [deployViewer, setDeployViewer] = useState(false);
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 10);
  }, []);

  const handleClose = () => {
    setDeployViewer(false);
    setVisible(false);
    setTimeout(() => {
      close();
    }, 150);
  };

  const handleSlide = (dir) => {
    if (gallery[current + dir]) {
      setCurrent(current + dir);
    }
  };

  return (
    <>
      <div
        className={`${
          visible ? "opacity-100" : "opacity-0"
        } transition-all p-6 flex flex-col scrollbar overflow-auto items-center fixed top-0 bottom-0 left-0 right-0 bg-black/90`}
      >
        <div className="lg:w-[80%] max-w-[1280px] min-h-full lg:min-h-[115%] flex flex-col">
          <div
            className="flex w-full cursor-pointer justify-end"
            onClick={handleClose}
          >
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
              onClick={() => setDeployViewer(true)}
              className="cursor-pointer rounded-lg object-contain bg-zinc-800 w-[90%] max-h-[512px] h-[40vw]"
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
              {current + 1}
            </p>
          </div>
          <p className="text-white text-lg py-8">{info.desc}</p>
          <h2 className="text-yellow-300 bg-zinc-800 border-[1px] border-zinc-700 py-2 w-[80%] flex rounded-xl mx-auto justify-center italic">
            {info.tech}
          </h2>
          {info.link && (
            <a
              href={info.link}
              target="_blank"
              className="text-white text-lg mx-auto px-2 my-5 bg-blueActive rounded-lg"
            >
              Visitar!
            </a>
          )}
        </div>
        {deployViewer && (
          <PhotoViewer
            gallery={gallery}
            current={current}
            close={() => setDeployViewer(false)}
          />
        )}
      </div>
    </>
  );
}

export function PhotoViewer({ gallery, close, current }) {
  const containerRef = useRef(null);
  const handleClose = () => {
    close();
  };

  const moveScrollStyle = (dir) =>
    `absolute ${
      dir > 0 ? "right-2" : "left-2"
    } cursor-pointer bottom-[50%] translate-y-[50%] bg-white flex justify-center items-center border-[1px] n border-slate-300 rounded-full leading-none`;

  const scroll = (dir) => {
    const options = (dir) => ({
      top: 0,
      left: window.innerWidth * dir,
      behavior: "smooth",
    });

    if (dir > 0) {
      containerRef.current.scrollBy(options(1));
    } else {
      containerRef.current.scrollBy(options(-1));
    }
  };

  useEffect(() => {
    containerRef.current.children[current].scrollIntoView({ inline: "center" });
  }, []);

  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black z-40">
        <div
          className="cursor-pointer flex absolute top-4 right-4 z-50 flex-start p-2 bg-black rounded-full"
          onClick={handleClose}
        >
          <box-icon name="x" color="#ffffff" size="md"></box-icon>
        </div>
        <div
          className={moveScrollStyle(-1)}
          onClick={() => {
            scroll(-1);
          }}
        >
          <box-icon name="chevron-left"></box-icon>
        </div>
        <div
          ref={containerRef}
          className="h-full flex overflow-auto snap-x snap-mandatory scrollbar"
        >
          {gallery.map((src, index) => (
            <div key={index} className="snap-center min-w-[100vw] object-contain">
              <img
                key={index}
                src={src}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <div
          className={moveScrollStyle(1)}
          onClick={() => {
            scroll(1);
          }}
        >
          <box-icon className="rotate-180" name="chevron-right"></box-icon>
        </div>
      </div>
    </>
  );
}
