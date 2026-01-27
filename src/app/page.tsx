import ListCards from "./components/listCards";

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-center text-3xl font-bold p-3">Welcome to Lot-Link</h1>
      <ListCards cards={cards} tags={tags} />
    </div>
  );
}

// Sample data for demonstration
import { card } from "@/app/components/card";
const tags: string[]= ["example", "website"];
const cards: card[] = [
  {
    id: "18cb1bfa-fe35-a83e-4864-16709581bf00",
    url: "https://example.com",
    title: "Another Example",
    notes: "Example website",
    tags: ["example", "website"],
  },
  {
    id: "28db2cfa-ge46-b94f-5975-2781a692cf11",
    url: "https://another-example.com",
    title: "Another Example",
    notes: "Another example website",
    tags: ["example"],
  },
];