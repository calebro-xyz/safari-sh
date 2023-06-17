export const metadata = {
  title: "Safarish - FAQ",
  description: "Frequently asked questions",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
