export const metadata = {
  title: "Safari.sh - countries to explore",
  description: "Get hired to travel around the world",
};

export default function JobsLayout({
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
