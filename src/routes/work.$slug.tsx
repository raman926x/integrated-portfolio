import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { getCaseStudy } from "@/data/case-studies";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study unavailable" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { study } = loaderData;
    const title = `${study.title} — Case Study`;
    return {
      meta: [
        { title },
        { name: "description", content: study.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: study.tagline },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: CaseNotFound,
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  return <CaseStudyLayout study={study} />;
}

function CaseNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="font-display text-4xl">No such case study</h1>
      <Link
        to="/"
        className="font-mono text-xs uppercase tracking-[0.24em] text-acid"
      >
        ← Back to all work
      </Link>
    </div>
  );
}
