import { Outlet } from "@remix-run/react";
import AboutMe from "~/components/AboutMe";
import PageSkeleton from "~/components/PageSkeleton";

export default function PageLayout() {
  return (
    <PageSkeleton>
      <section className="prose pt-12 dark:prose-dark lg:prose-xl">
        <Outlet />
        <AboutMe />
      </section>
    </PageSkeleton>
  );
}
