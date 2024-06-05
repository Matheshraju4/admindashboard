import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="  bg-gradient-to-bl from-indigo-400 via-blue-50 to-blue-400 ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
