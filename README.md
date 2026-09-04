# Ramandeep Singh | Dual-Portfolio

Welcome to the source code for my personal design portfolios. This single repository powers two completely distinct portfolio websites by utilizing a clever dual-branch architecture.

## Branching Strategy

Instead of building two separate repositories, I maintain two different themes, codebases, and content structures across Git branches. This allows me to isolate the environments but share core React components when needed:

*   **[`main` branch](https://github.com/raman926x/integrated-portfolio/tree/main): The Software Portfolio**
    *   Focuses on UI/UX, Product Design, and modern software interfaces.
    *   Features a sleek, opinionated "Acid / Neon Green" aesthetic.
    *   Live at: [ramandesign.vercel.app](https://ramandesign.vercel.app)

*   **[`hmi` branch](https://github.com/raman926x/integrated-portfolio/tree/hmi): The Automotive HMI Portfolio**
    *   Focuses on hardware concepts, digital clusters, and automotive interfaces.
    *   Features a custom "Warm Amber" 80s retro aesthetic, unique typography, and specialized case studies.
    *   Live at: [ramanhmi.vercel.app](https://ramanhmi.vercel.app)

## Tech Stack

*   **Framework:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
*   **Routing:** [TanStack Router / Start](https://tanstack.com/router/latest)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** Custom CSS keyframes + scroll reveals
*   **Deployment:** [Vercel](https://vercel.com/) (using domain-to-branch mapping)

## Content Management

This project intentionally avoids a heavy CMS. All content, metadata, and configuration are managed statically through TypeScript:
*   `src/data/case-studies.ts`: The central data store for all project case studies, including descriptions, roles, tech stacks, and media imports.
*   `src/components/portfolio/Work.tsx`: Manages the homepage project gallery layout and logic.

## Running Locally

To run either portfolio locally, clone the repository and check out your desired branch:

```bash
# Clone the repository
git clone https://github.com/raman926x/integrated-portfolio.git

# Navigate into the project directory
cd integrated-portfolio

# Switch to the branch you want to view (main or hmi)
git checkout main

# Install dependencies
npm install

# Start the development server
npm run dev
```

## License & Usage

The code architecture, layout structures, and setup are free to explore and use as inspiration for your own projects. However, the custom designs, branding, copywriting, case studies, images, and videos are my personal intellectual property and may not be copied, distributed, or repurposed.

---
*Built with too much coffee by Ramandeep Singh · Chandigarh, IN.*
