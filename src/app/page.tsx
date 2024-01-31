export default function Home() {
  return (
    <main>
      <header className="h-[60vh] flex flex-col items-center justify-center">
        <p className="text-[8rem] md:text-[11rem] lg:text-[15rem] tracking-tighter font-campton-bold text-center ">
          craft.
        </p>
        <p className="font-graphik-semibold text-zinc-700 text-center md:text-xl max-w-xs w-full">
          A collection of ui components for{" "}
          <span className="bg-gradient-to-r from-blue-900 to-blue-500 text-transparent bg-clip-text">
            React
          </span>{" "}
          , <span className="text-[#44bdf8]">Taiwind css </span> and
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-700 via-blue-500 to-pink-500">
            {" "}
            Framer motion
          </span>
          .
        </p>
      </header>
      <section className="p-6">
        <h1 className="text-center font-graphik-semibold text-2xl tracking-tight">
          Browse sections
        </h1>
        <br />
        <br />
        <section>
          <article className="h-36 apsect-video border border-zinc-200 rounded"></article>
        </section>
      </section>
    </main>
  );
}
