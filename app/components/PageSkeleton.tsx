import Footer from "./Footer";
import Navigation from "./Navigation";

export default function PageSkeleton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-yellow-500 via-red-400 to-pink-600 pt-2 dark:from-violet-900 dark:via-indigo-900 dark:to-slate-900 md:px-4 md:py-16">
      <div className="mb-4 max-w-6xl bg-white py-2 px-4 dark:bg-slate-800 md:mx-auto md:rounded-3xl md:px-16 md:py-12 md:shadow-2xl">
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
