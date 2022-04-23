import { LoaderFunction } from "@remix-run/node";
import { registerFont } from "canvas";
import { generateImage } from "../utils/generateSocialImage";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "herrsiering.de";
  const description = url.searchParams.get("description") || "";

  registerFont("public/fonts/Rubik-Regular.ttf", {
    family: "Rubik",
    weight: "400",
  });
  registerFont("public/fonts/Rubik-Bold.ttf", {
    family: "Rubik",
    weight: "700",
  });

  const socialImage = await generateImage({
    title,
    description,
    author: "Markus Siering",
    font: "Rubik",
    profileImage: "public/images/markus-siering_2x.png",
  });

  return new Response(socialImage, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=2419200",
    },
  });
};
