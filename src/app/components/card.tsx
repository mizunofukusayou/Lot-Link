import { UUID } from "crypto";
import styles from "@/app/components/card.module.css";

export type CardData = {
    id: UUID;
    url: URL;
    title: string;
    notes: string;
    tags?: string[];
};

export default function Card(props: { card: CardData }) {
    return (
        <div className={styles.card}>
            <p>{props.card.title}</p>
            <a
                href={props.card.url.href}
                title={props.card.url.href}
                className="text-blue-600 underline wrap-break-word line-clamp-1"
            >
                {props.card.url.href}
            </a>
            <p>{props.card.notes}</p>
        </div>
    );
}
