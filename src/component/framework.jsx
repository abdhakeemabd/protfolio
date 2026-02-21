import { OrbitingCircles } from "./orbiting-circle"

export function Framework() {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icons key={index} src={`/assets/icons/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles
        iconSize={25}
        radius={100}
        reverse
        speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icons key={index} src={`/assets/icons/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  )
}

const Icons = ({ src }) => {
  return (
    <img src={src} className="rounded-sm duration-110 hover:scale-110" alt="" />
  )
}