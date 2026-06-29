import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SECTION_IDS } from "@/lib/constants";
import type { Article } from "@/types/article";

export function WritingList({ articles }: { articles: Article[] }) {
  return (
    <Section id={SECTION_IDS.writing}>
      <SectionTitle>Writing</SectionTitle>
      {articles.length > 0 ? (
        <ul className="mt-6 divide-y divide-slate-800">
          {articles.map((article) => (
            <li key={article.url} className="py-4">
              <a className="font-medium text-white hover:text-blue-300" href={article.url}>{article.title}</a>
              <p className="mt-1 text-sm text-slate-400">{article.description}</p>
            </li>
          ))}
        </ul>
      ) : <p className="mt-6 text-slate-400">Articles are coming soon.</p>}
    </Section>
  );
}
