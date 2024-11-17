import { Link, Outlet } from "@remix-run/react";

export default function TilEntryLayout() {
  return (
    <>
      <Link className="mb-4 inline-block text-xs" prefetch="intent" to="../til">
        ← Back to TIL list
      </Link>
      <Outlet />
    </>
  );
}
