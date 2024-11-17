export default function Buzzword({ title }: { title: string }) {
  return (
    <span className="inline-block whitespace-nowrap rounded-md bg-slate-500 px-2 py-1 text-sm uppercase text-slate-50 dark:bg-slate-200 dark:text-slate-800">
      {title}
    </span>
  );
}
