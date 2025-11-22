import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trica Solutions - The Logical Path to Solutions",
  description: "Empowering innovation through Logic AI training, IT development, and intelligent test automation. Your trusted partner for AI education and software solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light-mode" style={{colorScheme: 'light'}}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#ffffff" />
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            document.documentElement.style.cssText = 'background:#ffffff!important;color:#1e293b!important;color-scheme:light!important';
            document.documentElement.classList.add('force-light');
          })();
        `}} />
        <style dangerouslySetInnerHTML={{__html: `
          html, html.force-light, body { 
            background: #ffffff !important; 
            color: #1e293b !important;
            color-scheme: light !important;
          }
          html *, body * {
            color-scheme: light !important;
          }
        `}} />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{background: '#ffffff', color: '#1e293b'}}>
        {children}
      </body>
    </html>
  );
}
