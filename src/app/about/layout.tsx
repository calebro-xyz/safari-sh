export const metadata = {
  title: "safari.sh - About us",
  description: "About us - Number one travel diretory",
};

export default function AboutLayout({
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
