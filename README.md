# Setup

1. Install node dependencies
2. Run project with `npm run dev`
3. Open in local host
4. Configure .env.local file as mentioned below

## Env Var Setup

Add .env.local file with the following inside:

VITE_USE_MOCKS=true
VITE_API_URL="api"

where VITE_API_URL is the real URL of the website

- Initially the app will use local mocks instead of real url to simulate the chat
- Once we add the `VITE_API_URL` we can turn off local mocks and use appropriate server
