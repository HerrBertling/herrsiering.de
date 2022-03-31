export default function AboutMe() {
  return (
    <aside className="grid grid-cols-1 gap-4 py-6 md:grid-cols-4">
      <div className="prose-sm md:col-span-3">
        <hr />
        <h3>Hi! I'm Markus 👋</h3>
        <h4>I help companies design and deliver digital products faster.</h4>
        <p>
          Doing so, I like well written CSS. Working with designers and frontend
          developers. Creating design systems. Caring for a smooth workflow for
          my team.
        </p>

        <p>
          Apart from that, I like my family. Ice cream. Netflix. Kettlebells.
          Yoga.
        </p>
        <p>
          You can find me on{" "}
          <a href="https://github.com/HerrBertling">GitHub</a>,{" "}
          <a href="https://www.linkedin.com/in/markussiering/">LinkedIn</a>,{" "}
          <a href="https://www.xing.com/profile/Markus_Siering2/cv">Xing</a> and{" "}
          <a href="/thoughts/pausing-twitter">not so often</a> on{" "}
          <a href="https://twitter.com/herrbertling">Twitter</a>.
        </p>
      </div>
      <picture className="max-h-48 dark:hue-rotate-180 md:col-span-1 md:self-end">
        <source
          srcSet="/images/markus-siering_2x.png 2x, /images/markus-siering.png"
          type="image/png"
        />
        <source
          srcSet="/images/markus-siering_2x.webp 2x, /images/markus-siering.webp"
          type="image/webp"
        />
        <img
          loading="lazy"
          className="mx-auto h-full max-h-36 object-contain"
          height="144"
          width="110"
          src="@/assets/images/markus-siering.png"
          alt="Markus Siering"
        />
      </picture>
    </aside>
  );
}
