# Lot-Link
リンクをタグやメモとともに保存して管理するアプリケーションです。名前の由来は、ランダムなくじ引き（Lottery）とリンクを組み合わせました。次に何を歌うか、どのリンクを見るかを運に任せるワクワク感を出しています。



## プロジェクト構成（ディレクトリ構造）

主要なファイルとフォルダの役割は以下の通りです。

- **`src/app/`**: アプリケーションのメインロジック。
    - `layout.tsx`: 共通レイアウト。HTMLの `<body>` 構造などを定義。
    - `page.tsx`: ホームページ（/）のメインコンポーネント。
- **`src/components/`**: (作成予定) 再利用可能なUIパーツ。
- **`public/`**: 画像、favicon、Webフォントなどの静的アセット。
- **設定ファイル**:
    - `package.json`: 依存関係とスクリプト（`npm run dev` など）。
    - `tsconfig.json`: TypeScriptのコンパイル設定とエイリアス設定。
    - `tailwind.config.ts`: Tailwind CSSのデザインシステム設定。
    - `next.config.ts`: Next.js特有のランタイム設定。

### 開発コマンド
- 開発サーバー起動: `npm run dev`
- プロダクションビルド: `npm run build`
- 型チェック/Lint: `npm run lint`

---


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.