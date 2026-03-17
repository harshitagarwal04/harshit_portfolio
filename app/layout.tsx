import "./globals.css";

export const metadata = {
  title: "Harshit Agarwal | Full Stack Engineer",
  description: "Portfolio of Harshit Agarwal, building AI-powered systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased bg-black text-gray-200 min-h-screen selection:bg-gray-700 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}