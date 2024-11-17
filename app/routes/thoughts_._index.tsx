export default function ThoughtsIndex() {
  const posts = [
    {
      title: "Surprising lessons learned from a silly side project",
      description: "Do silly stuff. Learn tons of things.",
      lastUpdated: "November 17, 2024",
      niceDate: "November 17, 2024",
      readingtime: "3 minutes",
      href: "/thoughts/silly-sideproject-learnings",
    },
    {
      title: "My Ocean Forest",
      description: "Building a forest. In the ocean.",
      lastUpdated: "March 29, 2022",
      niceDate: "March 29, 2022",
      readingtime: "2 minutes",
      href: "/thoughts/my-ocean-forest",
    },
    {
      title: "Pausing Twitter",
      description: "",
      lastUpdated: "December 29, 2021",
      niceDate: "December 29, 2021",
      readingtime: "1 minutes",
      href: "/thoughts/pausing-twitter",
    },
  ];
  return (
    <>
      <h1>Thoughts.</h1>
      <div className="mb-16 grid grid-cols-1 gap-16">
        {posts.map((post) => (
          <article key={post.title} className="max-w-2xl">
            <a
              href={post.href}
              className="no-underline opacity-80 transition-opacity hover:opacity-100 focus:opacity-100 active:opacity-100"
            >
              <h2 className="!mb-4 !mt-0">{post.title}</h2>
              {post.description && (
                <p className="mb-0 text-slate-600 dark:text-slate-100">
                  {post.description}
                </p>
              )}
              <aside className="mb-3 mt-4 flex gap-4 text-sm text-slate-500 dark:text-slate-300">
                <time dateTime={post.lastUpdated}>{post.niceDate}</time>
                <p className="!m-0">Time to read: {post.readingtime}</p>
              </aside>
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
