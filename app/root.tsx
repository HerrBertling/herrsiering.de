import type { V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
  useRouteError,
} from "@remix-run/react";
import AboutMe from "./components/AboutMe";
import PageSkeleton from "./components/PageSkeleton";
import TwitterPrefilledTextLink from "./components/TwitterPrefilledTextLink";
import styles from "./tailwind.css";
import type { ReactNode } from "react";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "icon", type: "image/png", href: "/icon.png" },
  ];
}

export const meta: V2_MetaFunction = () => [
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

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

const Document = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <PageSkeleton>
          <section className="prose prose-herrsiering pt-12 dark:prose-dark lg:prose-xl">
            {children}
            <AboutMe />
          </section>
        </PageSkeleton>
      </body>
    </html>
  );
};

export function ErrorBoundary() {
  const error = useRouteError();
  const location = useLocation();
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
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
        {error.status === 404 && (
          <p>
            If you feel like the page <code>{location.pathname}</code> should
            exist, feel free to{" "}
            <TwitterPrefilledTextLink
              tweetText={`@herrbertling I tried to access the page ${location.pathname} on your website, but it doesn't exist. It absolutely should, so stop what you're doing and build it! 🚀 https://tenor.com/view/dew-it-galactic-republic-palpatine-gif-21847982`}
            >
              click here and shout at me on Twitter about it!
            </TwitterPrefilledTextLink>{" "}
            😤
          </p>
        )}
      </Document>
    );
  } else if (error instanceof Error) {
    <Document>
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
    </Document>;
  } else {
    <Document>
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
    </Document>;
  }
}
