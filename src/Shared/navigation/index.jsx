import { Link } from "react-router-dom";



export default function navigation() {
  const menu = [
    {
      to: "/main/about",
      child: "about"
    },
    {
      to: "/main/portfolio",
      child: "portfolio"
    },
    {
      to: "/main/contact",
      child: "contact"
    },
    {
      to: "/main/socialmedia",
      child: "media"
    },
  ]

  return <nav className="mb-20 border-b-2 border-cyan-700">
    <ul className="flex">
      {menu.map((unit, index) => {
        return <Link
          key={index}
          to={unit.to}
          className="mr-15 py-5 px-10 uppercase tracking-widest hover:text-cyan-500 duration-300"
        >{unit.child}</Link>
      })}
    </ul>
  </nav>;
}
