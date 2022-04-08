import type { MetaFunction } from "remix";
import Footer from "~/components/Footer";
import Navigation from "~/components/Navigation";
import PageSkeleton from "~/components/PageSkeleton";
import ProfileImage from "~/components/ProfileImage";

export const meta: MetaFunction = () => {
  const description =
    "I help companies design and deliver digital products faster";
  return {
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

export default function PageLayout() {
  return (
    <PageSkeleton>
      <section className="grid grid-cols-1 md:grid-cols-8">
        <div
          className="
          prose
          dark:prose-dark
          md:col-span-5
          md:col-start-1 md:row-start-1
          lg:prose-xl
        "
        >
          <h3>Hi! I'm Markus 👋</h3>
          <h1>I help companies design and deliver digital products faster.</h1>
          <p>
            Doing so, I like well written CSS. Working with designers and
            frontend developers. Creating design systems. Caring for a smooth
            workflow for my team. Exploring new technologies.
          </p>
          <p>
            Apart from that, I like my family. Ice cream. Netflix. Kettlebells.
            Yoga.
          </p>
          <p>
            You can find me on{" "}
            <a href="https://github.com/HerrBertling">GitHub</a>,{" "}
            <a href="https://www.linkedin.com/in/markussiering/">LinkedIn</a>,{" "}
            <a href="https://www.xing.com/profile/Markus_Siering2/cv">Xing</a>{" "}
            and <a href="/thoughts/pausing-twitter">not so often</a> on{" "}
            <a href="https://twitter.com/herrbertling">Twitter</a>.
          </p>
        </div>
        <ProfileImage />
      </section>
    </PageSkeleton>
  );
}