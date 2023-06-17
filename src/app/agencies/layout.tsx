export const metadata = {
  title: "safari.sh - Agencies",
  description: "Find agencies for your next trip",
};

export default function AgenciesLayout({
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
