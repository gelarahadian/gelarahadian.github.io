# Product Requirements Document (PRD)

# Personal Portfolio Website

## Overview

### Project Goal

Develop a modern, minimalist portfolio website that highlights my professional experience, featured projects, and technical writing. The website should communicate professionalism, attention to detail, and strong frontend engineering skills to recruiters, HR professionals, engineering managers, and potential freelance clients.

The portfolio should leave a memorable first impression within the first few seconds while remaining lightweight, fast, and accessible.

---

# Target Audience

Primary

* Recruiters
* HR Professionals
* Engineering Managers

Secondary

* Freelance Clients
* Fellow Developers

---

# Brand

## Name

Gelar Rahadian Fajar

## Role

Full-Stack Developer / Frontend Developer

## Tagline

Creating beautiful user experiences.

---

# Design Principles

The overall design should be inspired by Brittany Chiang while remaining original.

Design characteristics:

* Minimalist
* Premium
* Clean
* Elegant
* Spacious
* Developer-focused

Avoid:

* Overly colorful UI
* Heavy visual effects
* Distracting animations

Theme:

Dark Mode Only

---

# Technical Stack

Framework

* Next.js (App Router)

Styling

* Tailwind CSS

Animation

* GSAP

Deployment

* GitHub Pages

Content

* JSON

---

# Website Structure

1. Hero
2. About
3. Experience
4. Projects
5. Writing
6. Footer

---

# Hero

Purpose:

Introduce myself immediately and encourage recruiters to continue exploring.

Content:

* Full Name
* Professional Role
* Short Introduction
* Social Links
* GitHub Statistics
* Resume Button
* View Projects Button

GitHub Statistics should be displayed as custom cards:

* Completed Projects
* Years of Experience
* Freelance Clients
* GitHub Contributions

The Hero should occupy most of the initial viewport and establish a strong visual hierarchy.

---

# About

Purpose:

Provide a concise overview of who I am.

Content length:

2–3 paragraphs.

Focus on:

* Background
* Expertise
* Engineering mindset
* Passion for building quality software

---

# Experience

Purpose:

Demonstrate professional growth.

Display as a vertical timeline.

Each item contains:

* Position
* Company
* Employment Duration
* Description
* Technologies Used

Bottom CTA:

View Full Resume

---

# Projects

Purpose:

Showcase my strongest work.

Display only four featured projects.

Each project includes:

* Thumbnail Image
* Clickable Project Title
* Description
* Technology Stack
* Result / Impact
* Live Demo

Bottom CTA:

View Full Project Archive

---

# Writing

Purpose:

Share technical knowledge and demonstrate continuous learning.

The architecture should allow easy expansion in the future.

Each article contains:

* Title
* Published Date
* Short Description
* Link

Data should come from JSON.

---

# Skills

No dedicated Skills section.

Technologies should naturally appear inside:

* Experience
* Projects

---

# Animation

Use subtle animations only.

Examples:

* Fade In
* Scroll Reveal
* Smooth Transitions
* Section Entrance Animation

Animations should never reduce readability.

---

# Interactions

Interactive elements include:

* Button Hover
* Link Hover
* Project Card Hover

Interactions should feel smooth and premium.

---

# Contact

Provide quick access to:

* GitHub
* LinkedIn
* Resume Download

No contact form.

---

# SEO

Include:

* Metadata
* OpenGraph
* Twitter Card
* Sitemap
* robots.txt
* Canonical URL

---

# Performance

Requirements:

* Lighthouse Score 95+
* Mobile First
* Responsive
* Accessible
* Optimized Images
* Static Export Compatible

---

# Visitor Counter

Display a visitor counter in the footer.

---

# Footer

Display:

* Copyright © Current Year Gelar Rahadian Fajar
* Built by Gelar Rahadian Fajar
* Visitor Counter

The footer should remain minimal and elegant.

---

# Content Management

All content should be stored in JSON files.

Suggested structure:

```
/content

profile.json
experience.json
projects.json
writing.json
statistics.json
socials.json
```

The UI should render dynamically from these files.

---

# Expected User Journey

A recruiter should be able to:

1. Understand who I am within 5 seconds.
2. View my professional background.
3. Review my best projects.
4. Read my technical articles.
5. Download my resume or visit my GitHub and LinkedIn.

---

# Expected Impression

When visitors leave the website, they should think:

"Gelar Rahadian Fajar is a frontend-focused engineer with exceptional attention to detail, strong engineering standards, and the ability to build polished, production-ready web experiences."
