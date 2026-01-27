import { UUID } from "crypto";
import styles from "@/app/components/card.module.css";

export type card = {
    id: UUID;
    url: URL;
    title: string;
    notes: string;
    tags?: string[];
};

export default function Card(props: { card: card }) {
    return (
        <div className={styles.card}>
            <p>{props.card.title}</p>
            <a
                href={props.card.url.href}
                title={props.card.url.href}
                style={{
                    color: "#0066cc",
                    textDecoration: "underline",
                    overflowWrap: "break-word",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                }}
            >
                {props.card.url.href}
            </a>
            <p>{props.card.notes}</p>
        </div>
    );
}
