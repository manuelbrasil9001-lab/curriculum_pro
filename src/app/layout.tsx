import "./globals.css";

export const metadata = {
  title: "Curriculum Profesional - Manuel Brasil",
  description: "CV generado con Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
