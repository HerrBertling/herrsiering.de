import { Outlet } from "@remix-run/react";
import AboutMe from "~/components/AboutMe";
import PageSkeleton from "~/components/PageSkeleton";

export default function PageLayout() {
  return (
    <PageSkeleton>
      <section className="prose prose-herrsiering pt-12 dark:prose-invert lg:prose-xl">
        <Outlet />
        <AboutMe />
      </section>
    </PageSkeleton>
  );
}
