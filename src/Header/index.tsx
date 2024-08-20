import { logoUrl, routes } from "../mockData";

export default function Header() {
  return (
    <div className="p-2 flex flex-row items-center justify-between border-b">
      <div className="w-64">
        <a href="/">
          <img src={logoUrl} alt="logo" />
        </a>
      </div>
      <div className="text-sm md:text-lg">
        {routes.map((route) => (
          <a href={route.path} key={route.path} className="mr-4 hover:underline">
            {route.name}
          </a>
        ))}
      </div>
    </div>
  );
}
