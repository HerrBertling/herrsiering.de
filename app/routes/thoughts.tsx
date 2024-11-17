import { Link, Outlet } from "@remix-run/react";

export default function ThoughtsEntryLayout() {
  return (
    <>
      <Link
        className="mb-4 inline-block text-xs"
        prefetch="intent"
        to="../thoughts"
      >
        ← Back to thoughts list
      </Link>
      <Outlet />
    </>
  );
}
