import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ERDiagram – Auto-generate ER diagrams from existing databases",
  description: "Connect to any SQL database and create interactive relationship diagrams instantly. Built for backend developers and DBAs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ec6f94a2-6319-458c-b025-e659183defbc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
