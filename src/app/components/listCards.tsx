import Card, { CardData } from "@/app/components/card";
export default function ListCards(props: {
    cards: CardData[];
    tags: string[] | undefined;
    filterLogic?: "and" | "or";
}) {
    const filteredCards = filterCardsByTags(props.cards, props.tags, props.filterLogic);
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            {filteredCards.map((card) => (
                <div key={card.id}>
                    <Card card={card} />
                </div>
            ))}
        </div>
    );
}

function filterCardsByTags(
    cards: CardData[],
    tags?: string[],
    operator?: "and" | "or",
): CardData[] {
    // Default operator is "or"
    const op = operator ?? "or";
    if (!tags || tags.length === 0) {
        return [] as CardData[];
    }
    return cards.filter((card) => {
        if (!card.tags) return false;
        if (op === "and") {
            return tags.every((tag) => card.tags!.includes(tag));
        }
        return card.tags.some((tag) => tags.includes(tag));
    });
}
