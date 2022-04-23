import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "@remix-run/react";

export type NavigationItem = {
  slug: string;
  title: string;
};

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [navigate]);

  const navigation: NavigationItem[] = [
    {
      slug: "/",
      title: "Home",
    },
    {
      slug: "/about",
      title: "About",
    },
    {
      slug: "/books",
      title: "Books",
    },
    {
      slug: "/principles",
      title: "Principles",
    },
    {
      slug: "/thoughts",
      title: "Thoughts",
    },
  ];
  return (
    <nav className="relative">
      <button
        className="flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-gray-700 dark:text-white dark:opacity-70 sm:hidden"
        type="button"
        onClick={() => {
          console.log(open);
          setOpen(!open);
        }}
      >
        <span className="mr-2 inline-block h-6 w-6">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          )}
        </span>
        {open ? <span>Close</span> : <span>Menu</span>}
      </button>
      <ul
        className={`absolute top-16 right-0 z-50 flex w-64 transform flex-col overflow-hidden rounded-md bg-white py-4 shadow-2xl transition-transform duration-300 dark:bg-gray-700 sm:static sm:top-auto sm:left-auto sm:z-30 sm:h-auto sm:w-auto sm:transform-none sm:flex-row sm:items-center sm:justify-end sm:rounded-none sm:bg-transparent sm:shadow-none dark:sm:bg-transparent ${
          open ? "translate-x-0" : "translate-x-[100vw] "
        }`}
      >
        {navigation.map(({ title, slug }) => (
          <li key={slug}>
            <NavLink
              to={slug}
              prefetch="intent"
              className={({ isActive }) =>
                isActive
                  ? "mx-2 inline-block border-b-2 border-transparent border-pink-600 px-2 py-2 text-red-400 dark:border-purple-800 dark:text-violet-700"
                  : "mx-2 inline-block border-b-2 border-transparent py-2 px-2 text-gray-600 dark:text-gray-200"
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
