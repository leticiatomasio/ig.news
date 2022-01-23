# ig.news

⚛️⚛️⚛️⚛️⚛️⚛️⚛️⚛️⚛️⚛️⚛️⚛️⚛️⚛️⚛️⚛️⚛️⚛️⚛️

React news web application based on authentication and subscription. Built with Next.js using Typescript, SCSS and technologies like Stripe, FaunaDB and Prismic. Project idealized and designed by Tiago Luchtenberg/Rocketseat and built from Rocketseat's online course [Ignite](https://www.rocketseat.com.br/ignite).

## Installing dependencies

Inside the root directory, run the command `yarn install`.

## Creating your .env.local file and acessing your own Secret Keys

For this application to work, you need to integrate it to Stripe, FaunaDB and Prismic, get your own Secret Keys and update `.env_sample` to an `.env.local` file with all environment variables properly stored.

## Development server

Run the command `yarn dev` to start the web application. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the initial page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on (EXAMPLE) [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Listening to Subscription events from Stripe API

Use the Stripe CLI to forward Stripe events to the local webhook endpoint on your server by running the command `stripe listen --forward-to localhost:3000/webhooks`. [More documentation](https://stripe.com/docs/stripe-cli/webhooks).

