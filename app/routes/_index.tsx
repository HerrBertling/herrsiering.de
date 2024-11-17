import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => [
  {
    name: "title",
    content: "Hi, I'm Markus",
  },
  {
    name: "description",
    content: "I help companies design and deliver digital products faster",
  },
  {
    name: "keywords",
    content: "Frontend, development, software, User interfaces, React, Vue",
  },
];

export default function IndexPage() {
  return (
    <section className="prose prose-herrsiering dark:prose-invert lg:prose-xl">
      <h3>Hi! I&#39;m Markus 👋</h3>
      <h1>I help companies design and deliver digital products faster.</h1>
      <p>
        Doing so, I like well written CSS. Working with designers and frontend
        developers. Creating design systems. Caring for a smooth workflow for my
        team. Exploring new technologies.
      </p>
      <p>
        Apart from that, I like my family. Ice cream. Netflix. Kettlebells.
        Yoga.
      </p>
      <p>
        <Link to="/about">More about me</Link>
      </p>
      <p>
        You can find me on <a href="https://github.com/HerrBertling">GitHub</a>,{" "}
        <a href="https://bsky.app/profile/herrsiering.de">Bluesky 🦋</a>,{" "}
        <a href="https://www.linkedin.com/in/markussiering/">LinkedIn</a> and{" "}
        <a href="https://www.xing.com/profile/Markus_Siering2/cv">Xing</a>.
      </p>
    </section>
  );
}
