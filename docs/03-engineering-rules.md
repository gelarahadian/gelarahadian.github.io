# Engineering Rules

## General Principles

Write code as if it will be maintained for years.

Prioritize readability over cleverness.

Every implementation should be production-ready.

---

# Architecture

Use App Router.

Use Server Components whenever compatible with static export.

Separate:

* UI
* Data
* Types
* Utilities

---

# TypeScript

Enable strict mode.

Never use:

* any
* ts-ignore

Prefer explicit typing.

---

# Components

Components should be:

* reusable
* composable
* focused on one responsibility

Avoid components larger than approximately 200 lines.

Extract reusable logic when appropriate.

---

# Styling

Use Tailwind CSS exclusively.

Avoid custom CSS unless absolutely necessary.

Keep utility classes organized.

Use consistent spacing throughout the project.

---

# Data

Never hardcode portfolio content.

Load all content from the `/content` directory.

---

# File Naming

Components:

PascalCase

Hooks:

camelCase

Utilities:

camelCase

JSON:

kebab-case

---

# Performance

Minimize JavaScript.

Avoid unnecessary client components.

Lazy-load non-critical content where appropriate.

Optimize images.

---

# Accessibility

Use semantic HTML.

Every interactive element must be keyboard accessible.

Provide descriptive labels.

Provide meaningful alt text.

---

# GitHub Pages Compatibility

Must support:

* output: "export"

Do not use:

* API Routes
* Server Actions
* Middleware
* Runtime-only features

---

# SEO

Every page should include metadata.

Generate sitemap and robots.txt.

Include JSON-LD Person schema.

---

# Git

Write clean commit messages.

Keep commits focused.

---

# Code Quality

Every new feature should:

* avoid duplication
* remain testable
* follow existing architecture
* remain easy to extend

Favor simplicity over abstraction.

When multiple solutions exist, choose the one that is easiest to understand and maintain.
