# VTpass API documentation

A redesign of the [VTpass](https://www.vtpass.com) API documentation, built with [Docusaurus](https://docusaurus.io). The VTpass API lets developers sell airtime, data, electricity, TV subscriptions, education PINs, and insurance from their own apps.

The redesign reorganizes the original documentation into clear sections, merges the separate pages for each provider into one page for each service, and adds the guides and concepts developers need to build a reliable integration.

## What's in the redesign
- **Structure based on [Diátaxis](https://diataxis.fr)**: the docs have five sections, which are Overview, Tutorials, How-to guides, API reference, and Concepts.
- **One reference page for each service**: for example, the 12 electricity company pages are one [Electricity](docs/reference/services/electricity.mdx) page, with a table of how the companies differ.
- **Sandbox and Live switch**: a switch in the navigation bar changes the base URL in every code sample and endpoint table.
- **New content**: a first-purchase tutorial, guides for pending transactions, webhooks, and going live, and concept pages for the transaction lifecycle, request IDs, and commission.
- **Consistent style**: content follows the [Google developer documentation style guide](https://developers.google.com/style), checked with [Vale](https://vale.sh).

## Content structure
The following table describes where each type of content lives:

| Section | Folder | Contents |
| :--- | :--- | :--- |
| Overview | `docs/overview` | About this API document, What's new |
| Tutorials | `docs/tutorials` | Getting started, from a sandbox account to a first purchase |
| How-to guides | `docs/how-to` | Handle pending transactions, webhooks, and going live |
| API reference | `docs/reference` | Authentication, wallet balance, requery, service discovery, services, and response codes |
| Concepts | `docs/explanation` | Transaction lifecycle, request ID, and commission |

Each section has its own sidebar, generated from its folder. To order pages, set `sidebar_position` in each page's front matter, and `position` in each folder's `_category_.json`.

## Requirements
- Node.js 20 or later
- [Vale](https://vale.sh/docs/install), to check writing style

## Run the site locally
1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

   The site opens at `http://localhost:3000`. Most changes reload automatically.

If you add or remove a file in `src/theme`, or move or rename pages, restart the server and clear the cache:

```bash
npm run clear && npm start
```

## Write and edit pages
Follow these conventions so new pages match the rest of the site:

- **Tables**: introduce every table with a sentence that calls it the following table and ends with a colon. In request field tables, use a **Required** column with `Yes` or `No`.
- **Code samples**: give each request a curl example and a JavaScript example, in `<Tabs>`. Use the sandbox base URL `https://sandbox.vtpass.com/api` in examples.
- **Endpoint URLs in tables**: use `<EnvUrl path="/api/pay" />` instead of a full URL, so the URL follows the Sandbox and Live switch. You don't need to import it.
- **Code that mustn't change with the switch**: add `noenv` to the code fence, for example ` ```js noenv `.
- **API field names**: write them exactly as the API returns them, including its misspellings, such as `convinience_fee`.
- **Links**: link to other pages with absolute paths, such as `/docs/reference/requery`. The build fails on broken links.

## Check writing style
Run Vale on the docs before you open a pull request:

```bash
vale docs
```

The Vale configuration is in `.vale.ini`, and uses the Google style. To accept a correct term that Vale flags, such as a product or place name, add it to `styles/config/vocabularies/VTpass/accept.txt`.

> [!NOTE]
> Vale checks the text inside inline code when a full stop or comma directly follows the code. If Vale flags text in inline code, reword the sentence so that the code isn't followed by punctuation.

## Build
Build the static site:

```bash
npm run build
```

The build writes the site to the `build` folder, and fails if any page has a broken link. To preview the build, run `npm run serve`.

To check the TypeScript in `src`, run `npm run typecheck`.

## Project layout
The following table describes the main files and folders:

| Path | Contents |
| :--- | :--- |
| `docs/` | Documentation pages written in Markdown and MDX |
| `src/pages/index.tsx` | Homepage |
| `src/components/EnvToggle/` | Sandbox and Live switch in the navigation bar |
| `src/components/EnvUrl/` | Endpoint URL that follows the switch |
| `src/theme/` | Docusaurus overrides that add the switch to code blocks, the navigation bar, and MDX pages |
| `src/utils/vtpassEnv.ts` | Saves the selected environment, and swaps sandbox URLs for live URLs |
| `src/css/custom.css` | Site styles, including table styles |
| `static/img/` | Logos and images |
| `styles/` | Vale styles and vocabulary |
| `docusaurus.config.ts` | Site configuration, navigation bar, and footer |
| `sidebars.ts` | Sidebar for each section |

## Deploy
The site is static, so you can host the `build` folder on any static hosting service.

To deploy to GitHub Pages, run one of the following commands. They build the site and push it to the `gh-pages` branch.

With SSH:

```bash
USE_SSH=true npm run deploy
```

Without SSH:

```bash
GIT_USER=<your-github-username> npm run deploy
```
