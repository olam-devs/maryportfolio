# Hey Mary Blog - Sanity Studio

This is the Sanity Studio for the Hey Mary Blog CMS.

## Project Details

- **Project ID:** 3x22qb0n
- **Dataset:** production
- **CORS origin:** http://localhost:3333 (already configured)

## Getting Started

### 1. Install dependencies

```bash
cd sanity-studio
npm install
```

### 2. Start the studio

```bash
npm run dev
```

This opens the Sanity Studio at http://localhost:3333.

### 3. Import sample data

To add the sample blog post, run:

```bash
npx sanity dataset import seed-data.ndjson production
```

This imports one sample post ("5 Reasons You Should Take a Solo Trip") marked as both featured and popular.

## Note on CORS

The CORS origin `http://localhost:3333` is already configured for this project, so the studio should work immediately after running `npm run dev`.

## Schema

The blog post schema includes:

- **title** (required) — Post title
- **slug** (required, auto-generated from title) — URL-friendly identifier
- **author** — Author name
- **mainImage** — Featured image with hotspot support
- **categories** — One or more of: Solo Travel, Itinerary, Group Travel, Adventure Travel, Hotels & Resorts, Restaurants
- **publishedAt** — Publication date/time
- **excerpt** — Short description (max 200 characters)
- **body** — Full post content (portable text / rich text blocks)
- **featured** — Flag to show in Featured Posts section
- **popular** — Flag to show in Popular Blogs section

## Live Integration

The blog page (`blog/index.html`) automatically fetches the latest post from Sanity and updates the Featured Posts and Popular Blogs sections dynamically using the Sanity CDN API.
