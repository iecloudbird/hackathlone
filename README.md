# HackAthlone Monorepo

Monorepo for yearly websites using [Next.js](https://nextjs.org/), [Turborepo](https://turbo.build/repo), and [pnpm](https://pnpm.io/). `apps/current` serves `hackathlone.com` (dynamic), `apps/archive` serves `2024.hackathlone.com` (static).

## Quick Links

- **Production (2025)**: <https://2025.example.com> (Hosted via Nginx)
- **Production (2024, Archived)**: <https://2024.example.com> (Static assets via Nginx)

## What is a Monorepo?

> A monorepo is a single repository containing multiple apps and packages, managed together to share code and streamline development. The alternative, a polyrepo, uses separate repositories for each app or package, which are versioned and published independently.

<https://turbo.build/repo/docs/handbook/what-is-a-monorepo>

## Why a Monorepo?

This monorepo hosts yearly website versions (e.g., 2024 archived, 2025 current) with distinct requirements:

- **Archived Websites** (e.g., 2024): Served as static assets for performance and low maintenance.
- **Current Website** (e.g., 2025): A dynamic Next.js app with server-side rendering and active development.
- **Shared Code**: A `packages/shared` package contains reusable components, utilities, and styles, reducing duplication across years.

## Why Not a Polyrepo?

A polyrepo would require separate repositories for each year’s website and shared code, leading to:

- **Clunky Developer Experience**: Changes to shared code (e.g., a footer component) would need to be published to npm, updated in each app’s `package.json`, and tested separately, slowing iteration.
- **Dependency Issues**: Multiple `node_modules` folders could break singletons (e.g., React context), causing bugs.
- **Versioning Overhead**: Managing versions across repos is complex and error-prone.

The monorepo avoids these issues by keeping all apps and packages together, enabling atomic testing, hot reloading, and simplified dependency management with Turborepo’s `workspace:*` syntax.

### Build and Test

To build all apps and packages, run the following command:

```
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```

or you are can also:

```
cd apps/current
npm run dev
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
