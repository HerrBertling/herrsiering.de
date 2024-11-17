export default function ProfileImage() {
  return (
    <picture className="col-span-3 mb-8 mt-8 max-h-72 md:col-start-6 md:mb-0 md:mt-16 md:max-h-96">
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
        className="
        mx-auto
        h-full
        max-h-60
        object-contain
        dark:hue-rotate-180
        lg:max-h-80
      "
        height="320"
        width="245"
        src="/images/markus-siering.png"
        alt="Markus Siering"
      />
    </picture>
  );
}
