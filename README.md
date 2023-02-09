# NextJS 13 Template

This is a NextJS template for projects using [Mantine](https://mantine.dev/guides/next/) components with SSR support. It implements linter checks through GitHub Actions, and [NextSEO](https://github.com/garmeeh/next-seo) for Search Engine Optimization. 
To start using this template, just create a new repository from this template and start coding 🎉

```
npm run dev
```
This template implements language translations for your site, if you don't need them, create your repository from the `nextjs-13-no-typescript-dependencies` branch.
## Docker

### Use of local environments

If you are using node directly to develop, please recall your typical `.env` file to `.env.local`. For this, use `.env` as a guide

### Using Docker to Develop

1. [Install Docker](https://docs.docker.com/engine/install/) on your machine
2. Build your container with:
  - NO ENV VARS AT BUILDTIME: `docker build -t <PROJECT_NAME>-nextjs-site .`
  - WITH ENV VARS AT BUILDTIME: `docker build --build-arg <ENV_NAME>=<ENV_VALUE> -t <PROJECT_NAME>-nextjs-site .`
3. Run your container: 
  - NO ENV VARS AT RUNTIME: `docker run -p 3000:3000 <PROJECT_NAME>-nextjs-site`
  - WITH ENV VARS AT RUNTIME: `docker run --env-file=./.env.local -p 3000:3000 <PROJECT_NAME>-nextjs-site`

---
### References
- [https://nextjs.org/docs/](https://nextjs.org/docs/getting-started)
- [https://mantine.dev/guides/next/](https://mantine.dev/guides/next/)
- [https://github.com/garmeeh/next-seo](https://github.com/garmeeh/next-seo)
- [https://github.com/vercel/next.js/tree/canary/examples/with-docker](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
- [https://docs.docker.com/engine/reference/commandline/build/#-set-build-time-variables---build-arg](https://docs.docker.com/engine/reference/commandline/build/#-set-build-time-variables---build-arg)
- [https://docs.docker.com/engine/reference/commandline/run/#-set-environment-variables--e---env---env-file](https://docs.docker.com/engine/reference/commandline/run/#-set-environment-variables--e---env---env-file)
