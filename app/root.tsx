import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation,
} from "@remix-run/react";
import AboutMe from "./components/AboutMe";
import PageSkeleton from "./components/PageSkeleton";
import TwitterPrefilledTextLink from "./components/TwitterPrefilledTextLink";
import styles from "./styles/app.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "icon", type: "image/png", href: "/icon.png" },
  ];
}

export const meta: MetaFunction = () => {
  const description =
    "I help companies design and deliver digital products faster";
  return {
    viewport: "width=device-width, initial-scale=1",
    charset: "utf-8",
    title: "Hi, I'm Markus",
    description,
    keywords: "Frontend, development, software, User interfaces, React, Vue",
    "twitter:creator": "@herrbertling",
    "twitter:site": "@herrbertling",
    "twitter:title": "Hi, I'm Markus",
    "twitter:description": description,
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
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

export function CatchBoundary() {
  const caught = useCatch();
  const location = useLocation();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <PageSkeleton>
          <section className="prose prose-slate pt-12 dark:prose-dark lg:prose-xl">
            <h2>Whoops! #{caught.status}</h2>
            <p>
              Oh noez, this went wrong 😬 The machines tell us that this
              happened:
            </p>
            <pre>
              <code>{caught.statusText}</code>
            </pre>
            <p>
              Maybe it's best to start from the beginning again and go back{" "}
              <NavLink to="/" prefetch="intent">
                home
              </NavLink>
              ? 🤔
            </p>
            {caught.status === 404 && (
              <p>
                If you feel like the page <code>{location.pathname}</code>{" "}
                should exist, feel free to{" "}
                <TwitterPrefilledTextLink
                  tweetText={`@herrbertling I tried to access the page ${location.pathname} on your website, but it doesn't exist. It absolutely should, so stop what you're doing and build it! 🚀 https://tenor.com/view/dew-it-galactic-republic-palpatine-gif-21847982`}
                >
                  click here and shout at me on Twitter about it!
                </TwitterPrefilledTextLink>{" "}
                😤
              </p>
            )}
            <AboutMe />
          </section>
        </PageSkeleton>
      </body>
    </html>
  );
}
