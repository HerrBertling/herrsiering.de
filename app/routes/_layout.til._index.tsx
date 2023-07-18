export default function ThoughtsIndex() {
  const tils = [
    {
      title: "Testing thrown redirects in React Router v6",
      lastUpdated: "July 18, 2023",
      niceDate: "July 18, 2023",
      href: "/til/18-07-23",
    },
    {
      title: "@testing-library/user-event clipboard",
      lastUpdated: "July 10, 2023",
      niceDate: "July 10, 2023",
      href: "/til/10-07-23",
    },
  ];
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
              <aside className="mt-4 mb-3 flex gap-4 text-sm text-slate-500 dark:text-slate-300">
                <time dateTime={til.lastUpdated}>{til.niceDate}</time>
              </aside>
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
