import Buzzword from "./Buzzword";
export type BuzzwordsProps = {
  words: string[];
};

export default function Buzzwords({ words }: BuzzwordsProps) {
  return (
    <p className="inline-flex flex-wrap items-center gap-2">
      <strong className="mr-1">Buzzwords: </strong>
      {words.map((word) => (
        <Buzzword title={word} key={word} />
      ))}
    </p>
  );
}
