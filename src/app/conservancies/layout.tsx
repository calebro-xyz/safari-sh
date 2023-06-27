import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "safari.sh - Conservancies",
  description: "Discover top animal conservancies in Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
