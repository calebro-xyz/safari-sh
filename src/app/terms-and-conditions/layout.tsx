export const metadata = {
  title: "Safarish - Terms and Conditions",
  description: "Terms and Conditions",
};

export default function TermsLayout({
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
