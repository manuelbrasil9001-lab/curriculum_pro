import "./globals.css";

export const metadata = {
  title: "Manuel Brasil - CV",
  description: "Curriculum Vitae Profesional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
