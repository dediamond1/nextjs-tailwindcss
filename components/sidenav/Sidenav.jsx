import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useContext } from "react";
import { MenuContext } from "../../context/menu/Menu.context";
import { navData } from "../../utils/sidenavitems";

export const Sidenav = () => {
  const { open, setOpen } = useContext(MenuContext);
  return (
    <>
      {/* this is the ovelay faster duration */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-y-0 inset-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }  transition-all duration-75 bg-[#3a3a3a70]`}
      />
      <div
        className={`fixed w-80 z-50 translate-x-0 bg-gray-600 h-full ${
          open ? "translate-x-0" : "-translate-x-full"
        } transform transition-all duration-300 overflow-y-auto`}
      >
        <div className="flex space-x-3 items-center justify-center p-10">
          <button className="absolute right-4" onClick={() => setOpen(false)}>
            <XIcon className="h-8 w-8 text-gray-50" />
          </button>
          <Link href={"/"}>
            <a>
              <span className="text-2xl text-gray-50">DEABB.</span>
              <span className="text-2xl text-yellow-500">ONLINE</span>
            </a>
          </Link>
        </div>
        {navData.menuItems.map((item, index) => (
          <div key={index} className="flex flex-col space-y-2 mb-2">
            {item.items.map(({ seconTitle, link, title, icon }, index) => (
              <div key={index} className="text-gray-50 flex flex-col">
                {seconTitle && (
                  <span className="pl-5 text-gray-400">{seconTitle}</span>
                )}
                {title && (
                  <Link href={"/"}>
                    <a
                      className="flex space-x-4 items-center p-4 hover:bg-gray-500 text-gray-50"
                      onClick={() => setOpen(false)}
                    >
                      <span>{icon}</span>
                      <span className="text-lg capitalize ">{title}</span>
                    </a>
                  </Link>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
