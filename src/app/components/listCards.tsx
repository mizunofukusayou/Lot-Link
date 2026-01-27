import Card, { card } from "@/app/components/card";
export default function ListCards(props: {
    cards: card[];
    tags: string[] | undefined;
}) {
    const sortedCards = sortCards(props.cards, props.tags);
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            }}
        >
            {sortedCards.map((card) => (
                <div key={card.id} id={card.id}>
                    <Card card={card} />
                </div>
            ))}
        </div>
    );
}

function sortCards(cards: card[], tags?: string[]): card[] {
    if (!tags || tags.length === 0) {
        return cards;
    } else {
        return cards.filter((card) => {
            if (!card.tags) return false;
            for (const tag of tags) {
                if (card.tags.includes(tag)) {
                    return true;
                }
            }
            return false;
        });
    }
}
