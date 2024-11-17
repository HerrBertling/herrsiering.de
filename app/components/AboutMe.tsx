import { useLocation } from "@remix-run/react";

export default function AboutMe() {
  const location = useLocation();
  if (location.pathname === "/") return null;
  return (
    <aside className="prose-sm prose-herrsiering py-6 opacity-80 dark:prose-invert">
      <hr />
      <h3>Hi! I&#39;m Markus 👋</h3>
      <p>I help companies design and deliver digital products faster.</p>
      <p>
        Doing so, I like well written CSS. Working with designers and frontend
        developers. Creating design systems. Caring for a smooth workflow for my
        team.
      </p>

      <p>
        Apart from that, I like my family. Ice cream. Netflix. Kettlebells.
        Yoga.
      </p>
      <p>
        You can find me on <a href="https://github.com/HerrBertling">GitHub</a>,{" "}
        <a href="https://bsky.app/profile/herrsiering.de">Bluesky 🦋</a>,{" "}
        <a href="https://www.linkedin.com/in/markussiering/">LinkedIn</a> and{" "}
        <a href="https://www.xing.com/profile/Markus_Siering2/cv">Xing</a>.
      </p>
    </aside>
  );
}
