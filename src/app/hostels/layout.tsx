export const metadata = {
  title: "safari.sh - Hostels",
  description: "Hostels",
};

export default function HostelsLayout({
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
