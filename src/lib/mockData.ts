// Sample data for demonstration
import { card } from "@/app/components/card";
import crypto from "crypto";
export const mockTags: string[] = ["example", "website"];
export const mockCards: card[] = [
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
        notes: "Another example websitekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk a a a affff a a a a a a a fffffa a a a a a a a a a a a a a afff a a a a a a a a a a a a a a a a a a a a a a a a a a a a   ",
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
