export const metadata = {
  title: "Safari.sh - countries to explore",
  description: "Discover countries to explore",
};

export default function CountriesLayout({
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
