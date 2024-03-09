import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import type { PropsWithChildren } from "react";
import AboutMe from "./components/AboutMe";
import PageSkeleton from "./components/PageSkeleton";
import styles from "./tailwind.css?url";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "icon", type: "image/png", href: "/icon.png" },
  ];
}

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <PageSkeleton>
          <section className="dark:prose-dark prose prose-herrsiering pt-12 lg:prose-xl">
            {children}
            <AboutMe />
          </section>
        </PageSkeleton>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h2>Whoops! #{error.status}</h2>
        <p>
          Oh noez, this went wrong 😬 The machines tell us that this happened:
        </p>
        <pre>
          <code>{error.statusText}</code>
        </pre>
        <p>
          Maybe it's best to start from the beginning again and go back{" "}
          <NavLink to="/" prefetch="intent">
            home
          </NavLink>
          ? 🤔
        </p>
      </>
    );
  } else if (error instanceof Error) {
    <>
      <h2>Whoops!</h2>
      <p>
        Oh noez, this went wrong 😬 The machines tell us that this happened:
      </p>
      <p>{error.message}</p>
      <pre>
        <code>{error.stack}</code>
      </pre>
      <p>
        Maybe it's best to start from the beginning again and go back{" "}
        <NavLink to="/" prefetch="intent">
          home
        </NavLink>
        ? 🤔
      </p>
    </>;
  } else {
    <>
      <h2>Whoops!</h2>
      <p>
        Something went wrong. So wrong, that we don't even know what exactly
        happened 😬
      </p>
      <p>
        Maybe it's best to start from the beginning again and go back{" "}
        <NavLink to="/" prefetch="intent">
          home
        </NavLink>
        ? 🤔
      </p>
    </>;
  }
}
