# 04 - File Structure

## Philosophy

The project should follow a scalable and maintainable architecture.

Every folder should have a single responsibility.

The architecture should support future expansion without requiring major refactoring.

---

# Directory Structure

```text
app/
│
├── layout.tsx
├── page.tsx
├── globals.css
├── sitemap.ts
├── robots.ts
│
components/
│
├── common/
│   ├── Button.tsx
│   ├── Section.tsx
│   ├── SectionTitle.tsx
│   ├── Container.tsx
│   └── SocialLinks.tsx
│
├── hero/
│
├── about/
│
├── experience/
│
├── projects/
│
├── writing/
│
├── footer/
│
└── visitor-counter/
│
content/
│
├── profile.json
├── socials.json
├── statistics.json
├── experience.json
├── projects.json
└── writing.json
│
hooks/
│
├── useGSAP.ts
│
lib/
│
├── constants.ts
├── metadata.ts
└── utils.ts
│
types/
│
├── profile.ts
├── project.ts
├── experience.ts
├── article.ts
└── statistics.ts
│
public/
│
├── images/
│
│   ├── projects/
│   ├── profile/
│   └── writing/
│
└── resume.pdf
```

---

# Folder Responsibilities

app/

Contains routing and page composition.

components/

Reusable UI components.

content/

All portfolio data.

hooks/

Reusable custom hooks.

lib/

Utilities and helper functions.

types/

Shared TypeScript interfaces.

public/

Static assets.

Never place portfolio content inside React components.
