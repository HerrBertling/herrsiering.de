import enquirer from "enquirer";
import fs from "fs-extra";
import { format } from "date-fns";
import path from "path";
import tils from "../app/data/tils.mjs";

const TIL_FILE_DIR = path.resolve(process.cwd(), "./app/data");
const TIL_FILE = path.join(TIL_FILE_DIR, "tils.mjs");
const ROUTES_DIR = path.resolve(process.cwd(), "./app/routes");

const getTILData = async () => {
  const answers = await enquirer.prompt([
    {
      type: "input",
      name: "title",
      message: 'What is the title of today\'s "Today I learned" entry?',
    },
  ]);

  const date = new Date();
  const formattedDate = format(date, "yy-MM-dd");
  const niceDate = format(date, "MMMM d, yyyy");
  const href = `/til/${format(date, "yy-MM-dd")}`;

  return {
    title: answers.title,
    lastUpdated: formattedDate,
    niceDate,
    href,
  };
};

const updateTILFile = async (data) => {
  await fs.ensureDir(TIL_FILE_DIR);

  tils.unshift(data);
  const fileContent = `export default ${JSON.stringify(tils, null, 2)};`;
  await fs.writeFile(TIL_FILE, fileContent, "utf8");
  console.log("📝  Successfully added the entry to the TIL list");
};

const createMDXFile = async (data) => {
  await fs.ensureDir(ROUTES_DIR);

  const fileName = `_layout.til.${data.lastUpdated}.mdx`;
  const filePath = path.join(ROUTES_DIR, fileName);

  const mdxContent = `
---
meta:
  - title: "${data.title}"
href: ${data.href}
date: "${data.lastUpdated}"
---

## ${data.title}

(Content following here, this can be empty)
  `;

  await fs.writeFile(filePath, mdxContent.trim(), "utf8");
  console.log(
    "📝  Successfully added the MDX file to the routes folder as",
    fileName,
  );
};

const run = async () => {
  try {
    const data = await getTILData();
    await updateTILFile(data);
    await createMDXFile(data);
    console.log("🚀 Done scaffolding new TIL entry.");
  } catch (err) {
    console.error(err);
  }
};

run();
