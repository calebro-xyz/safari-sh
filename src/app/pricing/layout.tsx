export const metadata = {
  title: "Safari.sh - pricing page",
  description: "safarish pricing page",
};

export default function PricingLayout({
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
