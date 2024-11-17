import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { PropsWithChildren } from "react";
import stylesheet from "~/tailwind.css?url";
import AboutMe from "./components/AboutMe";
import PageSkeleton from "./components/PageSkeleton";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesheet },
    { rel: "icon", type: "image/png", href: "/icon.png" },
  ];
};

export const meta: MetaFunction = () => [
  { name: "title", content: "Hi, I'm Markus" },
  {
    name: "description",
    content: "I help companies design and deliver digital products faster",
  },
  {
    name: "keywords",
    content: "Frontend, development, software, User interfaces, React, Vue",
  },
];

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <PageSkeleton>
          <section className="prose prose-herrsiering pt-12 dark:prose-invert lg:prose-xl">
            {children}
            <AboutMe />
          </section>
        </PageSkeleton>
      </body>
    </html>
  );
};

export default function App() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
    </>
  );
}
