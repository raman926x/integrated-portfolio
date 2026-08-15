import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { About } from "@/components/portfolio/About";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollFx } from "@/components/portfolio/ScrollFx";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ramandeep Singh" },
      {
        name: "description",
        content:
          "Portfolio of Ramandeep Singh — UI/UX and product designer in Chandigarh, India. Automotive HMI, editorial web, dashboards and weird side projects.",
      },
      { property: "og:title", content: "Ramandeep Singh" },
      {
        property: "og:description",
        content:
          "Portfolio of Ramandeep Singh — UI/UX and product designer in Chandigarh, India. Automotive HMI, editorial web, dashboards and weird side projects.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ScrollFx />
      <Hero />
      <Work />
      <About />
      <Footer />
    </main>
  );
}
