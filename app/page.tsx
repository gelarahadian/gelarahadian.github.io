import { About } from "@/components/about/About";
import { ExperienceList } from "@/components/experience/ExperienceList";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { ProjectList } from "@/components/projects/ProjectList";
import { WritingList } from "@/components/writing/WritingList";
import experienceData from "@/content/experience.json";
import profileData from "@/content/profile.json";
import projectsData from "@/content/projects.json";
import socialsData from "@/content/socials.json";
import statisticsData from "@/content/statistics.json";
import writingData from "@/content/writing.json";
import type { Article } from "@/types/article";
import type { Experience } from "@/types/experience";
import type { Profile, Socials } from "@/types/profile";
import type { Project } from "@/types/project";
import type { Statistic } from "@/types/statistics";

export default function Home() {
  const profile: Profile = profileData;
  const socials: Socials = socialsData;
  const statistics: Statistic[] = statisticsData;
  const experiences: Experience[] = experienceData;
  const projects: Project[] = projectsData;
  const articles: Article[] = writingData;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main>
        <Hero profile={profile} socials={socials} statistics={statistics} />
        <About profile={profile} />
        <ExperienceList experiences={experiences} resumeUrl={socials.resume} />
        <ProjectList projects={projects} />
        <WritingList articles={articles} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
