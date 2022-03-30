export default function BasicImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      className="h-auto max-w-full rounded-xl object-cover"
      src={src}
      alt={alt}
      loading="lazy"
    />
  );
}
