# ---- Base Node ----
FROM node:23-slim AS base
WORKDIR /usr/src/app
# Copy package.json and package-lock.json for utilising Docker cache
COPY package.json package-lock.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm install && npm cache verify

# ---- Copy Files/Build ----
FROM dependencies AS build
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm run build

# --- Release ----
FROM base AS release
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY ./public ./public
COPY ./.env.prd ./.env

EXPOSE 3000
CMD ["npm", "start"]
