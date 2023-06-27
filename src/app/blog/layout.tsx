import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "safari.sh - Blog",
  description: "Read about the latest news and updates from safari.sh",
};

export default function BlogLayout({
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
