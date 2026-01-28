import Card, { CardData } from "@/app/components/card";
export default function ListCards(props: {
    cards: CardData[];
    tags: string[] | undefined;
}) {
    const filteredCards = filterCardsByTags(props.cards, props.tags);
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            }}
        >
            {filteredCards.map((card) => (
                <div key={card.id} id={card.id}>
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
    if (!tags || tags.length === 0) {
        return cards;
    } else {
        return cards.filter((card) => {
            if (!card.tags) return false;
            if (operator === "and") {
                return tags.every((tag) => card.tags!.includes(tag));
            }
            return card.tags.some((tag) => tags.includes(tag));
        });
    }
}
