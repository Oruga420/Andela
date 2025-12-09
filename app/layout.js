import "./globals.css";

export const metadata = {
  title: "Alejandro De La Mora | AI Solutions Architect",
  description: "Portfolio resume for Alejandro De La Mora built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
