function Footer() {
  return (
    <div className="max-w-screen-xl mx-auto py-10 flex gap-32 ">
      {/* first div */}
      <div className="basis-1/2">
        <h1 className="text-[11rem] font-semibold tracking-tight">Refokus.</h1>
      </div>
      {/* second div */}
      <div className="basis-1/2 flex gap-4">
        <div className="basis-1/3">
          <h4 className="mb-10 text-zinc-500 capitalize font-bold text-2xl">
            Socials
          </h4>
          {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
            <a className="block mt-3 text-zinc-500 capitalize">{item}</a>
          ))}
        </div>
        <div className="basis-1/3">
          <h4 className="mb-10 text-zinc-500 capitalize font-bold text-2xl">
            SiteMaps
          </h4>
          {["Home", "work", "Career", "Contact"].map((item, index) => (
            <a className="block mt-3 text-zinc-500 capitalize">{item}</a>
          ))}
        </div>
        <div className="basis-1/2">
            <p>Refocus is a poineering digital agency drivern by design and empowered by technology.</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
