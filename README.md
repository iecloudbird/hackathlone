# HackAthlone Websites Monorepo

This is a [monorepo](https://vercel.com/docs/monorepos) hosting yearly versions of a website, built using [Next.js](https://nextjs.org/) and managed with [Turborepo](https://turbo.build/repo). The structure follows Vercel’s [Turborepo examples](https://github.com/vercel/turbo/tree/main/examples) and [Next.js examples](https://github.com/vercel/next.js/tree/canary/examples), enabling shared code, independent deployments, and efficient builds for archived and current websites.

<!-- 
| 2024 (Archived) | 2025 (Current) |
|-----------------|----------------|
| <img src="https://via.placeholder.com/400x200.png?text=2024+Website" width="400"/> | <img src="https://via.placeholder.com/400x200.png?text=2025+Website" width="400"/> | -->

## Quick Links

- **Documentation**: [Coming soon](#) (Placeholder for internal docs)
- **Development**: <http://localhost:3000> (Run `npm run dev` for 2025 app)
- **Production (2025)**: <https://2025.example.com> (Hosted via Nginx)
- **Production (2024, Archived)**: <https://2024.example.com> (Static assets via Nginx)
- **Figma Designs**: [Figma link](#) (Placeholder for design files)
- **CI/CD Pipelines**: [GitHub Actions](https://github.com/your-username/your-repo/actions)

## What is a Monorepo?

> A monorepo is a single repository containing multiple apps and packages, managed together to share code and streamline development. The alternative, a polyrepo, uses separate repositories for each app or package, which are versioned and published independently.

<https://turbo.build/repo/docs/handbook/what-is-a-monorepo>

## Why a Monorepo?

This monorepo hosts yearly website versions (e.g., 2024 archived, 2025 current) with distinct requirements:
- **Archived Websites** (e.g., 2024): Served as static assets for performance and low maintenance.
- **Current Website** (e.g., 2025): A dynamic Next.js app with server-side rendering and active development.
- **Shared Code**: A `packages/shared` package contains reusable components, utilities, and styles, reducing duplication across years.

The monorepo structure allows:
- **Independent Deployments**: Each year’s app (e.g., `apps/2024`, `apps/2025`) can be built and deployed separately, with Nginx routing traffic (e.g., `2024.example.com`, `2025.example.com`).
- **Shared Resources**: Code in `packages/shared` (e.g., components, styles) is reused across years, ensuring consistency and reducing maintenance.
- **Efficient Builds**: Turborepo caches builds and orchestrates dependencies, speeding up development and CI/CD.
- **Separate Configurations**: Each app has its own `next.config.js`, `package.json`, and test setup, preventing issues like CSS bloat or global style conflicts.
- **Collaborative Development**: Teams can work on different years or shared packages without conflicts, with hot reloading for real-time updates.

## Why Not a Polyrepo?

A polyrepo would require separate repositories for each year’s website and shared code, leading to:
- **Clunky Developer Experience**: Changes to shared code (e.g., a footer component) would need to be published to npm, updated in each app’s `package.json`, and tested separately, slowing iteration.
- **Dependency Issues**: Multiple `node_modules` folders could break singletons (e.g., React context), causing bugs.
- **Versioning Overhead**: Managing versions across repos is complex and error-prone.

The monorepo avoids these issues by keeping all apps and packages together, enabling atomic testing, hot reloading, and simplified dependency management with Turborepo’s `workspace:*` syntax.


# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app 
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turbo.build/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/docs/reference/configuration)
- [CLI Usage](https://turbo.build/docs/reference/command-line-reference)
