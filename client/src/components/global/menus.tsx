import { X } from "lucide-react";

const menus = [
  {
    name: "home",
    slug: "/",
  },
  {
    name: "centers",
    slug: "/centers",
  },
  {
    name: "status",
    slug: "/search",
  },
];

interface MenusProps {
  mobile?: {
    isOpen: boolean;
    close: () => void;
  };
}

function Menus({ mobile }: MenusProps) {
  return (
    <>
      {mobile && (
        <div
          className={`w-full h-[100vh] fixed top-0 sm:hidden bg-black bg-opacity-70 z-10 ${
            mobile.isOpen ? "left-0" : "hidden"
          }`}
          onClick={mobile.close}
        ></div>
      )}
      <nav
        className={
          mobile
            ? `sm:hidden flex flex-col gap-3 absolute top-0  bg-white min-w-fit w-2/3 max-w-[300px] h-screen transition-[.3s] z-20 ${
                mobile.isOpen ? "left-0 " : "left-[-100%]"
              }`
            : "hidden sm:flex space-x-4"
        }
      >
        {mobile && (
          <X
            className="ml-auto m-3 cursor-pointer hover:text-red-500  "
            onClick={mobile.close}
          />
        )}

        {menus.map((menu) => (
          <a
            className={`font-medium capitalize hover:text-primary transition-colors  ${
              mobile ? "text-lg px-4" : "text-sm  "
            }`}
            href={menu.slug}
          >
            {menu.name}
          </a>
        ))}
      </nav>
    </>
  );
}

export default Menus;
