import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'
import Footer from './footer'

export const metadata: Metadata = {
  title: "ChatBT - Custom AI Chatbot for customer service",
  description: "Demo of AI Chatbot for customer service created by MyBotChat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        <div className="d-flex flex-column min-vh-100">
          {children}
        </div>
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
