export const metadata = {
  title: "Safari.sh - National parks to visit",
  description: "Discover National parks to visit",
};

export default function ParksLayout({
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
