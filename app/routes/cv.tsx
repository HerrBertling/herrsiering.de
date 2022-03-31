import { LoaderFunction, redirect } from "remix";

export const loader: LoaderFunction = () => {
  return redirect("/cv/markus-siering-cv.pdf");
};
