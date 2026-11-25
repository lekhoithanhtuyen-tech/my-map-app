# GPS Location Map

A small web app that displays GPS location points on an interactive map,
built for the IoT For Beginners "Visualize location data" assignment (Deploy your app).

**Live app:** https://my-map-app-omega-tawny.vercel.app

## Tech stack
- Vite (vanilla JavaScript)
- MapTiler SDK for the map and markers
- Hosted on Vercel, deployed from the `main` branch

## Subscription key handling
The map API key is not hard-coded. It is read from the environment variable
`VITE_SUBSCRIPTION_KEY` via `import.meta.env.VITE_SUBSCRIPTION_KEY`.
- Locally: stored in a `.env` file that is excluded from Git by `.gitignore`.
- In the cloud: stored in Vercel's Environment Variables settings.

## Run locally
1. `npm install`
2. Create a `.env` file containing `VITE_SUBSCRIPTION_KEY=your_key`
3. `npm run dev`