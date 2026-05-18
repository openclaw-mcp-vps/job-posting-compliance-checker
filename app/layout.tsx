import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Job Posting Compliance Checker",
  description: "Ensure job posts comply with salary transparency laws. Instant compliance reports for HR managers posting jobs across multiple states."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="53f0a027-bb4c-445b-b056-1611123d5647"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
