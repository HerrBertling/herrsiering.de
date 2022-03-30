export default function ThoughtsIndex() {
  const posts = [
    {
      title: "My Ocean Forest",
      description: "",
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
          <article key={post.title}>
            <a
              href={post.href}
              className="transform-opacity !no-underline opacity-80 hover:opacity-100 focus:opacity-100 active:opacity-100"
            >
              <h2 className="!mb-1 !mt-0">{post.title}</h2>
              <div v-if="post.excerpt">{post.description}</div>
              <aside className="mt-4 mb-3 flex gap-4 text-sm opacity-80">
                <time dateTime={post.lastUpdated}>{post.niceDate}</time>
                <p v-if="post.readingtime" className="!m-0">
                  Time to read: {post.readingtime}
                </p>
              </aside>
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
