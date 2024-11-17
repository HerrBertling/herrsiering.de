import type { ReactNode } from "react";

export default function TwitterPrefilledTextLink({
  tweetText,
  children,
}: {
  tweetText: string;
  children: ReactNode;
}) {
  const encodedTweetText = encodeURIComponent(tweetText);
  const link = `https://twitter.com/intent/tweet?text=${encodedTweetText}`;
  return (
    <a target="_blank" rel="noreferrer" href={link}>
      {children}
    </a>
  );
}
