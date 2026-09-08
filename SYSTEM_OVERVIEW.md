# System Overview

## Pangasinan Heritage Digital Showcase

The **Pangasinan Heritage Digital Showcase** is a responsive tourism and cultural information website designed to present Pangasinan's natural wonders, historical landmarks, cultural heritage, beaches, adventures, and local attractions in an organized and visually engaging way. The system provides visitors with a simple way to discover destinations, read background information, and explore individual heritage sites.

## 1. System Purpose

The primary purpose of the system is to serve as a digital showcase for Pangasinan's heritage and tourism destinations. It helps users:

- Discover notable places in Pangasinan.
- Search destinations by name, location, category, or tag.
- Filter destinations by tourism and heritage category.
- View detailed information about a selected destination.
- Learn about each site's history and cultural or environmental significance.
- View recommended activities and visitor information.
- Access the website through desktop, tablet, and mobile devices.

## 2. Target Users

### Tourists and Visitors
Users can browse destinations, search for places, learn about attractions, and use the provided visitor information when planning a trip.

### Local Residents
Residents can use the website to discover and promote local attractions and learn more about Pangasinan's heritage.

### Students and Researchers
The website can serve as an introductory digital reference for learning about selected historical, cultural, natural, and local attractions in Pangasinan.

### Tourism Stakeholders
The showcase provides a digital presentation platform that can support awareness and promotion of Pangasinan tourism.

## 3. Main System Modules

### A. Home Page
The home page introduces the Pangasinan Heritage Digital Showcase and directs visitors toward featured destinations and major sections of the website.

### B. Heritage and Destination Browser
The destination browser displays heritage sites in a searchable and filterable grid. Users can enter keywords and select categories to narrow the displayed destinations.

Available categories include:

- Natural Wonders
- Historical Sites
- Cultural Heritage
- Beaches
- Adventure
- Local Attractions

### C. Destination Details
Each destination has a dedicated detail page containing information such as:

- Destination name
- Location
- Category and tag
- Description
- Historical background
- Cultural or environmental significance
- Recommended things to do
- Visitor information
- Destination images and gallery images

### D. About Page
The About section explains the purpose and concept of the digital showcase and its role in presenting Pangasinan's heritage and tourism destinations.

### E. Navigation and Footer
A reusable header navigation and footer provide consistent navigation throughout the website and help users move between major sections.

## 4. Current Destination Data

The current static dataset includes destinations such as:

- Hundred Islands — Alaminos City
- Bolinao Lighthouse — Bolinao
- Balungao Hot Spring — Balungao
- Patar Beach — Bolinao
- Minor Basilica of Our Lady of Manaoag — Manaoag
- Tayug Sunflower Garden — Tayug

Destination records are stored in `data/heritageSites.js`, allowing the content to be maintained separately from the interface components.

## 5. System Architecture

The project uses a component-based web architecture built with **Next.js 14 and React 18**. The application uses the Next.js App Router and is configured as a static website for GitHub Pages deployment.

### Architecture Flow

```text
User / Visitor
      |
      v
Responsive Web Interface
      |
      v
Next.js App Router
      |
      +--------------------+
      |                    |
      v                    v
Page Components       Reusable Components
      |                    |
      +---------+----------+
                |
                v
      Static Heritage Data
       data/heritageSites.js
                |
                v
        Destination Details
                |
                v
      Static Export / out/
                |
                v
          GitHub Pages
```

## 6. Technology Stack

| Layer | Technology |
|---|---|
| Frontend Framework | Next.js 14.2.5 |
| UI Library | React 18.3.1 |
| Styling | Tailwind CSS 3.4.7 / global CSS |
| Icons | Heroicons React 2.1.5 |
| Data Storage | Static JavaScript data |
| Routing | Next.js App Router |
| Build | Next.js static export |
| Hosting | GitHub Pages |
| Source Control | GitHub |

## 7. Component Structure

The interface follows a reusable component structure:

- **Atoms** — buttons, icons, images, typography, and design tokens.
- **Molecules** — category cards, heritage cards, and search form.
- **Organisms** — header navigation, footer, and heritage grid.
- **Templates** — shared main layout.
- **Pages** — home, about, heritage browser, and individual destination pages.

This structure makes the system easier to maintain because common interface elements can be reused across multiple pages.

## 8. Search and Filtering Process

The destination browser uses client-side filtering. When a visitor enters a search term, the system checks the destination's name, location, category, and tag. The selected category is then applied as an additional filter.

```text
User enters keyword
        |
        v
Search destination data
        |
        v
Match name / location / category / tag
        |
        v
Apply selected category
        |
        v
Display matching destinations
```

If no destination matches the search and category combination, the system displays a message asking the visitor to try another search or category.

## 9. Data Management

The current version does not use a database or external API. Heritage information is stored locally in `data/heritageSites.js`. Images are stored in the `public/images` directory and referenced by the destination data.

This approach keeps the website lightweight and suitable for static hosting. It also means that content changes require updating the project files and redeploying the site.

## 10. Deployment

The project is configured for GitHub Pages compatibility. The README specifies the following workflow:

```bash
npm install
npm run dev
npm run build
```

The production static output is generated in the `out/` directory. GitHub Actions is configured through `.github/workflows/deploy-pages.yml` to support deployment to GitHub Pages.

## 11. Security and Limitations

Because the current system is a public static showcase, it does not process user accounts, passwords, payments, or sensitive personal information. It also does not currently provide an administrative content-management system or database-backed content editing.

Current limitations include:

- No user registration or login.
- No online booking or reservation system.
- No database or server-side content management.
- No user-generated reviews or comments.
- Destination information is maintained manually.
- Search and filtering operate on the locally loaded dataset.

## 12. Future Enhancements

The system can be expanded with:

- Database-backed destination management.
- Admin dashboard for adding and editing destinations.
- Interactive maps and location directions.
- Tourist itinerary planning.
- User reviews and ratings.
- Event and festival listings.
- Multilingual content.
- Analytics for visitor and destination engagement.
- Accessibility improvements and richer metadata.

## 13. System Summary

The Pangasinan Heritage Digital Showcase is a lightweight, responsive, and component-based tourism website that organizes Pangasinan destination information into an accessible digital experience. Its current architecture emphasizes fast static delivery, reusable React components, local content data, searchable destinations, category filtering, and individual destination pages. The system is designed to make Pangasinan's natural, historical, cultural, and local attractions easier to discover online.
