export const metadata = {
  title: "safari.sh - Conservancies",
  description: "Discover top animal conservancies in Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
