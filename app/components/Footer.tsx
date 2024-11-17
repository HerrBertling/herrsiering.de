import { NavLink } from "@remix-run/react";

type FooterNavItem = {
  slug: string;
  title: string;
};

const FooterLinks: FooterNavItem[] = [
  {
    slug: "/legal",
    title: "Legal",
  },
  {
    slug: "/privacy",
    title: "Privacy",
  },
];

export default function Footer() {
  return (
    <nav className="py-3 text-right text-white dark:text-slate-200">
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
            dark:text-slate-200
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
