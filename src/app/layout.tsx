import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/data/content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} · ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.summary,
  metadataBase: new URL(profile.website),
  openGraph: {
    title: `${profile.name} · ${profile.title}`,
    description: profile.summary,
    url: profile.website,
    siteName: profile.name,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t || (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}})()` }} />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <div className="relative flex min-h-full flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
