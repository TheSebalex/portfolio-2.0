import React, { useRef } from "react";
import { tecnologies } from "./Tecnologies";

export function Home() {

  const ulRef = useRef("");

  const moveScrollUl = (dir) => {
    const childs = Array.from(ulRef.current.children);
    const {left, right} = ulRef.current.getBoundingClientRect();
    const viewerElements = childs.filter((child) => {
      const {left:leftChild, right:rightChild} = child.getBoundingClientRect()
      return (
        leftChild > left &&
        rightChild < right
      );
    });

    let objective = Math.round((viewerElements.length-1) / 2);
    for (let i in childs) {
      if (childs[i] == viewerElements[objective]) {
        if (childs[parseInt(i) + parseInt(dir)]) {
          childs[parseInt(i) + parseInt(dir)].scrollIntoView({
            inline: "center",
          });
        }
      }
    }
  };

  return (
    <>
      <div className="w-full h-[85vh]">
        <section className="h-full bg-white p-4 lg:p-8 lg:px-12 font-mono w-full overflow-y-auto pb-10">
          <h1 className="text-3xl font-black mt-2 ml-4 flex gap-4 items-center">
            Sobre mi
            <box-icon name="mouse-alt" color="black" size="24px"></box-icon>
          </h1>
          <p className="text-lg mt-2 ml-2 font-mono">
            Soy un desarrollador cuyo enfoque es el de ofrecer soluciones
            tecnologicas que satisfagan las necesidades que le son planteadas,
            especializado en resolver problemas, ya sean sociales, financieros o
            aquellos que nos afectan día a día. Cuento con el placer de aprender
            un poco más conforme me encuentro con dificultades o nuevas
            tecnologías.
          </p>
          <h1 className="text-3xl font-black mt-2 ml-4 flex gap-4 items-center">
            Tecnologías
            <box-icon name="laptop"></box-icon>
          </h1>
          <div className="flex gap-2 justify-center items-center">
            <div
              onClick={() => {
                moveScrollUl(-1);
              }}
              className="md:hidden"
            >
              <div className="hover:scale-150 transition-all">
              <box-icon name='chevron-left' ></box-icon>
              </div>
            </div>
            <ul
              ref={ulRef}
              className="snap-x scroll-smooth px-8 md:justify-center mt-10 gap-6 flex overflow-x-auto md:flex-wrap scrollbar w-full pb-8"
            >
              {tecnologies.map((item, index) => (
                <li className="snap-center" key={index}>
                  <TecnologyCard item={item} />
                </li>
              ))}
            </ul>
            <div
              onClick={() => {
                moveScrollUl(1);
              }}
              className="md:hidden"
            >
              <div className="hover:scale-150 transition-all">
              <box-icon name='chevron-right'></box-icon>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export function TecnologyCard({ item }) {
  return (
    <>
      <div className="w-[35vw] h-[45vw] max-w-[135px] max-h-[180px] rounded-xl flex flex-col justify-center items-center bg-gradient-to-tr from-gray-50 to-slate-300 border-[1px] drop-shadow-md border-zinc-200">
        <div className="h-[60%] w-[90%] flex justify-center items-center m-2 rounded-lg">
          <img
            className="object-contain w-[80%] h-[90%] drop-shadow-md"
            src={item.img}
          />
        </div>
        <div className="h-[40%] w-full flex justify-center items-center text-center truncate">
          <h2 className="w-full text-lg font-black text-blackpurple leading-none">
            {item.name}
          </h2>
        </div>
      </div>
    </>
  );
}
