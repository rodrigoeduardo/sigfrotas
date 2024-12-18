import type { Metadata } from "next";
import { Public_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { TanstackProvider } from "@/providers/TanstackQuery";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SIGFROTAS",
  description: "Sistema de gestão de frotas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
      </head>
      <body
        className={`${publicSans.variable} ${poppins.variable} antialiased font-poppins`}
      >
        <TanstackProvider>
          <Toaster
            position="top-center"
            richColors
            toastOptions={{
              style: {
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              },
            }}
          />

          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
