export const metadata = {
  title: "Safari.sh - hotels to stay",
  description: "Discover hotels to stay",
};

export default function HotelsLayout({
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
