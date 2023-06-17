export const metadata = {
  title: "Safarish- user dashboard",
  description: "User dashboard",
};

export default function DashLayout({
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
