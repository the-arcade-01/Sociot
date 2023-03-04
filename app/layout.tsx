import "./globals.css";

export const metadata = {
  title: "Sociot",
  description: "A minimalist social media app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
