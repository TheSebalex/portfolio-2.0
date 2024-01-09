import React from "react";
import { useNavigate, useMatch, Link } from "react-router-dom";
import { Header } from "./Header.jsx"

export function Layout({ children }) {
  return (
    <>
    <div className="flex w-full">
      <MenuNav />
      <div className="w-full m-0 min-h-screen max-h-screen">
				<Header />
        <div>{children}</div>
      </div>
    </div>
    </>
  );
}

export function MenuNav() {
  const navigate = useNavigate();

  const menuButtons = [
    [<p className="hidden lg:block">Inicio</p>, "/", {name: "home", color: "#ffffff", activeColor: "#29abe2"}],
    [<p className="hidden lg:block">Experiencia</p>, "/experience", {name: "briefcase", color:"#ffffff", activeColor: "#29abe2"}],
    [<p className="hidden lg:block">Portafolio</p>, "/portfolio", {name: "code-alt", color: "#ffffff", activeColor: "#29abe2"}],
  ];

  const twStyle = `font-mono text-2xl lg:pl-[10%] py-2 hover:bg-white/5 font-medium h-full flex justify-center lg:justify-start items-center gap-2 w-[90%]`

  return (
    <>
      <aside className="relative min-h-screen h-full bg-blackblack min-w-[15vw] lg:min-w-[20vw]">
        <nav className="h-full">
          <ul className="flex flex-col justify-center items-center m-auto mt-6">
            {menuButtons.map((item, index) => (
              <li key={index} className="w-full my-2">
                <LinkButton 
                text={item[0]} 
                icon={item[2] ? item[2] : null} 
                route={item[1]} 
                css={twStyle} 
                activeColor={"text-blueActive"} 
                deactiveColor={"text-white"} />
              </li>
            ))}
            <li className="w-full bottom-5 absolute mt-auto mb-0 mt-auto mb-2">
                <LinkButton 
                text={<p className="hidden lg:block">Contacto</p>} 
                route={"/contact"} 
                icon={{name: "contact", type: "solid", color: "#ffffff", activeColor: "#29abe2"}} 
                css={twStyle} 
                activeColor={"text-blueActive"} deactiveColor={"text-white"}  />
              </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export function LinkButton({ text, route, css, icon, activeColor, deactiveColor }) {

  const getIcon = (props) => 
  (<box-icon 
    name={props.name && props.name} 
    color={(props.color && !match) || (!props.activeColor) ? props.color : props.activeColor} 
    type={props.type && props.type} 
    size={props.size && props.size} 
    flip={props.flip && props.flip} 
    border={props.border && props.border} 
    animation={props.animation && props.animation}>
    </box-icon>)

  const match = useMatch(route);
	const style = `${match ? activeColor : deactiveColor} transition-all items-center
   mx-auto rounded-lg ${css && css}`
	const navigate = useNavigate()

  return (
    <>
      <button
        className={style}
        onClick={() => {
          navigate(route);
        }}
      >
        {icon && getIcon(icon)}
        {text}
      </button>
    </>
  );
}
