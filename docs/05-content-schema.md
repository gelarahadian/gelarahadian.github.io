# 05 - Content Schema

## profile.json

```json
{
  "name": "",
  "role": "",
  "tagline": "",
  "introduction": "",
  "location": "",
  "bio": [],
  "avatar": ""
}
```

---

## socials.json

```json
{
  "github": "",
  "linkedin": "",
  "resume": ""
}
```

---

## statistics.json

```json
[
  {
    "title": "Completed Projects",
    "value": "20+"
  },
  {
    "title": "Years Experience",
    "value": "3+"
  },
  {
    "title": "Freelance Clients",
    "value": "20+"
  },
  {
    "title": "GitHub Contributions",
    "value": "500+"
  }
]
```

---

## experience.json

```json
[
  {
    "company": "",
    "position": "",
    "duration": "",
    "description": "",
    "technologies": []
  }
]
```

---

## projects.json

```json
[
  {
    "title": "",
    "description": "",
    "thumbnail": "",
    "technologies": [],
    "result": "",
    "liveDemo": "",
    "repository": "",
    "featured": true
  }
]
```

Only four featured projects should appear on the homepage.

---

## writing.json

```json
[
  {
    "title": "",
    "description": "",
    "date": "",
    "url": ""
  }
]
```

When empty, the UI should gracefully display a placeholder indicating that articles are coming soon.
