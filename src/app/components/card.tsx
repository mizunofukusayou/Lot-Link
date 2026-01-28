import { UUID } from "crypto";

export type CardData = {
    id: UUID;
    url: URL;
    title: string;
    note?: string;
    detail?: string;
    tags?: string[];
};

export default function Card(props: { card: CardData }) {
    return (
        <article className="border border-foreground bg-background text-foreground p-4 m-4 rounded-2xl text-center max-w-sm shadow-lg">
            <h2 className="break-normal line-clamp-2 text-[1.5rem]">
                {props.card.title}
            </h2>
            <a
                href={props.card.url.href}
                title={props.card.url.href}
                className="text-blue-600 underline break-all line-clamp-1 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.card.url.href}
            </a>
            {props.card.note && <p className="break-all line-clamp-2">{props.card.note}</p>}
            {props.card.detail && (
                <details>
                    <summary className="cursor-pointer">詳細を表示</summary>
                    <p className="break-all whitespace-pre-wrap text-left mt-2 border rounded-3xl p-2">
                        {props.card.detail}
                    </p>
                </details>
            )}
        </article>
    );
}
