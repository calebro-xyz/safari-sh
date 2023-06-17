export const metadata = {
  title: "Safari.sh - lodges to stay",
  description: "Discover lodges to stay",
};

export default function LodgesLayout({
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
