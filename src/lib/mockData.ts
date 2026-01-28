// Sample data for demonstration
import { CardData } from "@/app/components/card";
export const mockTags: string[] = ["example", "website"];
export const mockCards: CardData[] = [
    {
        id: "card0001-70cd-4aaa-87b8-7e9104b8a562",
        url: new URL("https://example.com"),
        title: "Another Example",
        note: "Example website",
        detail: "This is a detailed description of the example website.",
        tags: ["example", "website"],
    },
    {
        id: "card0002-4468-49a6-bb6f-1811391f0e3b",
        url: new URL(
            "https://another-example-asdfljasdlfjasldkfjalsdkjfalskdjfalsdkfjalsdkfj.com",
        ),
        title: "Another Example Example Example Example Example Example",
        note: "Another example websitekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk a a a affff a a a a a a a fffffa a a a a a a a a a a a a a afff a a a a a a a a a a a a a a a a a a a a a a a a a a a a   ",
        detail: "This is a detailed description of the example website.longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong long description.",
        tags: ["example"],
    },
    {
        id: "card0003-9bba-4cd8-8465-cc6765d6f5ef",
        url: new URL(
            "https://another-example-asdfljasdlfjasldkfjalsdkjfalskdjfalsdkfjalsdkfj.com",
        ),
        title: "Another Example",
        note: "Another example website",
        detail: "",
        tags: ["example"],
    },
    {
        id: "card0004-ec20-4114-a12a-e8f64fbc589e",
        url: new URL(
            "https://another-example-asdfljasdlfjasldkfjalsdkjfalskdjfalsdkfjalsdkfj.com",
        ),
        title: "Another Example",
        note: "Another example website",
        tags: ["example"],
    },
    {
        id: "card0005-6fcb-4554-9a28-ef3a8cfd5022",
        url: new URL(
            "https://another-example-asdfljasdlfjasldkfjalsdkjfalskdjfalsdkfjalsdkfj.com",
        ),
        title: "Another Example",
        note: "Another example website",
        tags: ["example"],
    },
];
