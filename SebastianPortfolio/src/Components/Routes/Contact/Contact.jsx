export function Contact() {
  return (
    <>
      <div className="w-full h-[85vh]">
        <section className="h-full p-4 lg:p-8 lg:px-12 font-mono w-full overflow-y-auto">
          <h1 className="text-3xl font-black mt-2 ml-4 flex gap-4 items-center">
            Contacto
            <box-icon name="mouse-alt" color="black" size="24px"></box-icon>
          </h1>
          <p>Puedes contactarme por los siguientes, medios:</p>
          <div className="my-16 flex justify-center flex-wrap gap-8">
            <ContactCard
              text={"Github"}
              imgcss={"h-[50%] pt-8"}
              icon={"https://i.postimg.cc/3JcqZ6Z8/pngegg-15.png"}
            />
            <ContactCard
              text={"LinkedIn"}
              imgcss={"h-[50%] pt-8"}
              icon={"https://i.postimg.cc/CxcZRGCf/pngegg-11.png"}
            />
            <ContactCard
              text={"Gmail"}
              imgcss={"h-[50%] pt-10"}
              icon={"https://i.postimg.cc/tgXFnRVY/pngegg-16.png"}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export function ContactCard({ icon, css, imgcss, form, link, text }) {
  return (
    <>
      <div
        className={`${
          css && css
        } min-w-[180px] min-h-[220px] max-h-[300px] max-w-[250px] w-[15vw] flex flex-col rounded-xl border-[1px] overflow-hidden h-[20vw] border-slate-200 bg-slate-100 relative`}
      >
        <img src={icon && icon} className={`mx-auto ${imgcss && imgcss}`} />
        <p className="absolute bottom-[20%] left-0 right-0 text-center text-lg">
          {text && text}
        </p>
        <div className="absolute bottom-[10%] text-center left-0 right-0">
          <button className="bg-blueActive px-2 text-white rounded-lg">
            Contactar!
          </button>
        </div>
        <div className="h-2 absolute bottom-0 bg-blueActive left-0 right-0"></div>
      </div>
    </>
  );
}

export function Form() {
  return <></>;
}

//<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSedS3Wc1aFiLM_1QJ2M0C5WggwARCGkvW_EBQPzvuDZIXggkA/viewform?embedded=true" width="640" height="824" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
