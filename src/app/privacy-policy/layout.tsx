export const metadata = {
  title: "Safari.sh - privacy policy",
  description: "safarish privacy policy",
};

export default function PrivacyLayout({
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
