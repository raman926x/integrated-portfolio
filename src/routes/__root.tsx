import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/portfolio/Navbar";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ramandeep Singh" },
      { name: "description", content: "Portfolio of Ramandeep Singh — UI/UX and product designer in Chandigarh, India. Automotive HMI, editorial web, dashboards and weird side projects." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Ramandeep Singh" },
      { property: "og:description", content: "Portfolio of Ramandeep Singh — UI/UX and product designer in Chandigarh, India. Automotive HMI, editorial web, dashboards and weird side projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Ramandeep Singh" },
      { name: "twitter:description", content: "Portfolio of Ramandeep Singh — UI/UX and product designer in Chandigarh, India. Automotive HMI, editorial web, dashboards and weird side projects." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ecb884996afc2b11fc629665c1e588f1/id-preview-f20558e8--6856fddf-3581-48de-859a-3b96ad0e3a29.lovable.app-1786786815773.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ecb884996afc2b11fc629665c1e588f1/id-preview-f20558e8--6856fddf-3581-48de-859a-3b96ad0e3a29.lovable.app-1786786815773.png" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,600;1,9..144,800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Vibur&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
