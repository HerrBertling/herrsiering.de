import Footer from "./Footer";
import Navigation from "./Navigation";

export default function PageSkeleton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:p-4 min-h-screen bg-white dark:bg-slate-950">
      <div className="mb-4 max-w-6xl py-2 px-4 md:mx-auto md:rounded-3xl md:px-16">
        <header className="mb-4 flex justify-end">
          <Navigation />
        </header>
        <main className="mb-8">{children}</main>
      </div>
      <footer className="mx-auto max-w-6xl">
        <Footer />
      </footer>
    </div>
  );
}
