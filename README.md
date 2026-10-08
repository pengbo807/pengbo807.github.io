# Bo Peng's personal website

A Jekyll academic website for [Bo Peng](https://pengbo807.github.io/), compatible with GitHub Pages.

## Content

- `_pages/about.md`: biography, news, publications by year, research projects, education, internships, and contact.
- `_data/publications.yml`: publication metadata for the homepage. Papers are grouped by `year`; each figure uses `thumbnail`, `thumbnail_alt`, `thumbnail_width`, and `thumbnail_height`.
- `_layouts/academic.html`: profile sidebar, responsive navigation, and search/social metadata.
- `images/publications/`: figures from the papers and their official repositories; `sources.json` records sources, extraction details, and license notices. No research diagrams are AI-generated.
- `assets/css/academic.css` and `assets/js/academic.js`: responsive styling and progressive enhancements. Content and links remain available without JavaScript.
- `_config.yml`: website URL, author/contact information, and Jekyll configuration.

The layout takes visual inspiration from [Pingjie Wang's homepage](https://applewpj.github.io/), with independently implemented styling and the author's own content and figures. Personal portraits are excluded from site builds.

The website omits private contact details and unpublished submission information. Equal-contribution markers refer to the public paper bylines; publication metadata comments record any discrepancies requiring confirmation.

## Local preview

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. For a production-style build:

```sh
JEKYLL_ENV=production bundle exec jekyll build --safe
```

Before publishing, check the homepage on desktop and mobile; verify the mobile menu, paper figures and links, email copy, and the `/about/` redirect. Site output goes into `_site/`, which is ignored by Git.

The website retains the existing GitHub Pages/Jekyll setup. Updating source files locally does not publish changes; publication happens through the repository's configured GitHub Pages workflow after pushing.
