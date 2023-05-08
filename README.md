# Pokemon Guesser

Trivia game based on Pokemon.

## Getting started

Prerrequisite:

- MySQL local database (or Planetscale connection using PScale CLI)
- npm

Setup:

1. Clone repo
2. `npm install`
3. Create `.env` file if one does not already exist
4. Add connection URLs for both database and shadow db to .env
5. Initialize database - `npx prisma migrate dev`
6. Initialize base data set - `npm run ts-node ./scripts/fill-db.ts`
7. Run dev server `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Endpoints

### `GET` /api/pokemon

- The response will contain 10 random Pokemon
- OPTIONAL: parameter `?all=true` will return a list of the 151 Pokemon with their respectives attributes and clues

### `GET` /api/score

- Returns an object with the registered scores, and the names asociated with them, in descendant order

### `POST` /api/score
- Body must have an object with the `score` (integer) and `name` (string), checks if is already in the database, if not is registered.