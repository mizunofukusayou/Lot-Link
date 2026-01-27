import { UUID } from "crypto"
import { Url } from "next/dist/shared/lib/router/router";

export type card = {
    id: UUID;
    url: Url;
    title: string;
    notes: string;
    tags?: string[];
}

export default function Card(props: { card: card }) {
    return (
        <>
            <p>{props.card.title}</p>
            <p>{typeof props.card.url === 'string' ? props.card.url : props.card.url.pathname}</p>
            <p>{props.card.notes}</p>
        </>
    );
}