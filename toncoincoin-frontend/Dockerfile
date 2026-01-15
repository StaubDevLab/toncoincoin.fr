# 1. Base image
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# 2. Dependencies
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# 3. Development Stage (C'est ici que le Hot Reload se passe)
FROM base AS dev
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# On utilise npm run dev pour activer le Hot Reload
CMD ["npm", "run", "dev"]

# 4. Builder (Pour la prod)
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 5. Production Runner
FROM base AS runner
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]