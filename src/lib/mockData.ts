// Sample data for demonstration
import { CardData } from "@/app/components/card";
export const mockTags: string[] = ["example", "website"];
export const mockCards: CardData[] = [
    {
        id: "00000001-70cd-4aaa-87b8-7e9104b8a562",
        url: "https://example.com",
        title: "First Example",
        note: "Example website",
        detail: "This is a detailed description of the example website.",
        tags: ["example", "website"],
    },
    {
        id: "00000002-4468-49a6-bb6f-1811391f0e3b",
        url: "https://another-example-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long.com",
        title: "Second Example Example Example Example Example Example",
        note: "Another example website used for testing how long text is displayed in the user interface. This mock note intentionally contains a longer, more realistic description so that wrapping, truncation, and tooltip behavior can be verified during development. It describes an example site that aggregates articles, tutorials, and reference material, giving designers and engineers enough content to evaluate spacing, typography, and layout under near real-world conditions.",
        detail: "This is a detailed description of the example website. longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong long description.",
        tags: ["example"],
    },
    {
        id: "00000003-9bba-4cd8-8465-cc6765d6f5ef",
        url: "https://example.com/page1",
        title: "Third Example",
        note: "Another example website",
        detail: "",
        tags: ["example"],
    },
    {
        id: "00000004-ec20-4114-a12a-e8f64fbc589e",
        url: "https://example.com/page2",
        title: "Fourth Example",
        note: "Another example website",
        detail: undefined,
        tags: ["example"],
    },
    {
        id: "00000005-6fcb-4554-9a28-ef3a8cfd5022",
        url: "https://example.com/path/to/resource?query=test#section1",
        // url.pathname = "/path/to/resource";
        // url.searchParams.set("query", "test");
        // url.hash = "section1";
        title: "Fifth Example",
        note: "Another example website",
        detail: undefined,
        tags: ["example"],
    },
];
