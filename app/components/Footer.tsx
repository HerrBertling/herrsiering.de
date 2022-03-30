import { NavLink } from "remix";
import type { NavigationItem } from "./Navigation";

export default function Footer() {
  const FooterLinks: NavigationItem[] = [
    {
      slug: "/legal",
      title: "Legal",
    },
    {
      slug: "/privacy",
      title: "Privacy",
    },
  ];
  return (
    <nav className="py-3 text-right text-white dark:text-gray-200">
      <small className="px-4">Links to Amazon are affiliate links.</small>
      <ul className="mt-4 flex w-full flex-row justify-end text-sm">
        {FooterLinks.map(({ slug, title }) => (
          <li key={slug}>
            <NavLink
              prefetch="intent"
              to={slug}
              className="
            px-4
            py-2
            text-white
            opacity-90
            hover:opacity-100
            dark:text-gray-200
          "
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
