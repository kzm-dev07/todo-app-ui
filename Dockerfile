# ---- Base Node ----
FROM node:23-slim AS base

ARG NEXT_PUBLIC_APP_URL

WORKDIR /usr/www/app
# Copy package.json and package-lock.json for utilising Docker cache
COPY package.json package-lock.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm install && npm cache verify

# ---- Copy Files/Build ----
FROM dependencies AS build
WORKDIR /usr/www/app
COPY . /usr/www/app
RUN npm run build

# --- Release ----
FROM base AS release
COPY --from=dependencies /usr/www/app/node_modules ./node_modules
COPY --from=build /usr/www/app/.next ./.next
COPY ./public ./public
COPY ./.env.prd ./.env

EXPOSE 3000
CMD ["npm", "start"]
