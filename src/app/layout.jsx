import "./globals.css";

export const metadata = {
  title: "POS System",
  description: "Point of Sale Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        {children}
      </body>
    </html>
  );
}
