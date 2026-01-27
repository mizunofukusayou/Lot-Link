import ListCards from "./components/listCards";

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-center text-3xl font-bold p-3">
        Welcome to Lot-Link
      </h1>
      <ListCards cards={cards} tags={tags} />
    </div>
  );
}

// Sample data for demonstration
import { card } from "@/app/components/card";
import crypto from "crypto";
const tags: string[] = ["example", "website"];
const cards: card[] = [
  {
    id: crypto.randomUUID(),
    url: new URL("https://example.com"),
    title: "Another Example",
    notes: "Example website",
    tags: ["example", "website"],
  },
  {
    id: crypto.randomUUID(),
    url: new URL(
      "https://another-example-asdfljasd;lfjasldkfjalsdkjfalskdjfa;lsdkfja;lsdkfj.com",
    ),
    title: "Another Example Example Example Example Example Example",
    notes:
      "Another example websitekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk a a a affff a a a a a a a fffffa a a a a a a a a a a a a a afff a a a a a a a a a a a a a a a a a a a a a a a a a a a a   ",
    tags: ["example"],
  },
  {
    id: crypto.randomUUID(),
    url: new URL(
      "https://another-example-asdfljasd;lfjasldkfjalsdkjfalskdjfa;lsdkfja;lsdkfj.com",
    ),
    title: "Another Example",
    notes: "Another example website",
    tags: ["example"],
  },
  {
    id: crypto.randomUUID(),
    url: new URL(
      "https://another-example-asdfljasd;lfjasldkfjalsdkjfalskdjfa;lsdkfja;lsdkfj.com",
    ),
    title: "Another Example",
    notes: "Another example website",
    tags: ["example"],
  },
  {
    id: crypto.randomUUID(),
    url: new URL(
      "https://another-example-asdfljasd;lfjasldkfjalsdkjfalskdjfa;lsdkfja;lsdkfj.com",
    ),
    title: "Another Example",
    notes: "Another example website",
    tags: ["example"],
  },
];
