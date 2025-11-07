import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Icon from "./Icon";
import { Link } from "react-router-dom";

const navigation = [
  { name: "New Arrivals", to: "/new-arrivals" },
  { name: "Best Sellers", to: "/best-sellers" },
  { name: "Shop by Category", to: "/categories" },
  { name: "Featured Collections", to: "/collections" },
  { name: "Build Your Own Box", to: "/build-box" },
  { name: "Shop by Video", to: "/video-shop" },
];

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white border-b shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

              {/* LEFT: Menu + Logo */}
              <div className="flex items-center gap-3">
                <div className="md:hidden">
                  <DisclosureButton className="p-2 text-gray-700 hover:text-black">
                    {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                  </DisclosureButton>
                </div>

                <Link to="/" className="text-2xl font-bond tracking-wider text-gray-900">
                  MIRAGGIO
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navigation.map((item) => (
                  <Link key={item.name} to={item.to} className="text-sm text-gray-700 hover:text-black">
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* RIGHT: Icons */}
              <Icon />
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <DisclosurePanel className="md:hidden bg-white border-t">
            <div className="px-2 py-3 space-y-2">
              {navigation.map((item) => (
                <Link key={item.name} to={item.to} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

