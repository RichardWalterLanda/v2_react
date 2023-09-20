import { Link } from "react-router-dom";



export default function navigation() {
  const menu = [
    {
      to: "/main/portret",
      child: "Portret"
    },
    {
      to: "/main/lifestyle",
      child: "Lifestyle"
    },
    {
      to: "/main/studio",
      child: "Studio"
    },
    {
      to: "/main/cosplay",
      child: "Cosplay"
    },
    {
      to: "/main/contact",
      child: "Contact"
    },
  ]

  return <nav className="mb-20 shadow-2xl fixed top-10 left-10 right-20">
    <ul className="flex">
      {menu.map((unit, index) => {
        return <Link
          key={index}
          to={unit.to}
          className="mr-15 py-5 px-10 uppercase tracking-widest hover:text-cyan-800 hover:bg-white duration-300"
        >{unit.child}</Link>
      })}
    </ul>
  </nav>;
}
