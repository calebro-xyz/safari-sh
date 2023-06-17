export const metadata = {
  title: "Safarish - Visa",
  description: "Discover travel visa requirements",
};

export default function VisaLayout({
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
