import tils from "../data/tils.mjs";

export default function TilIndex() {
  return (
    <>
      <h1>Today I Learned.</h1>
      <div className="mb-16 grid grid-cols-1 gap-16">
        {tils.map((til) => (
          <article key={til.title} className="max-w-2xl">
            <a
              href={til.href}
              className="no-underline opacity-80 transition-opacity hover:opacity-100 focus:opacity-100 active:opacity-100"
            >
              <h2 className="!mb-4 !mt-0">{til.title}</h2>
              <aside className="mb-3 mt-4 flex gap-4 text-sm text-slate-500 dark:text-slate-300">
                <time dateTime={til.lastUpdated}>{til.niceDate}</time>
              </aside>
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
