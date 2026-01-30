import ListCards from "./components/listCards";
import { mockCards, mockTags } from "@/lib/mockData";

export default function Home() {
    return (
        <div className="min-h-screen p-4">
            <h1 className="text-center text-3xl font-bold p-3">
                Welcome to Lot-Link
            </h1>
            <ListCards cards={mockCards} tags={mockTags} />
        </div>
    );
}
