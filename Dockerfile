# syntax=docker/dockerfile:1

# ---- Base ---------------------------------------------------------------
# Node 24 (current LTS) on Alpine for a small footprint.
# libc6-compat lets native deps (e.g. sharp) load on musl.
FROM node:24-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# ---- Dependencies -------------------------------------------------------
# Isolated so this layer is cached unless package*.json changes.
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- Builder ------------------------------------------------------------
FROM base AS builder
# NEXT_PUBLIC_* values are inlined at build time, so they must be present here
# (not at runtime). Optional: defaults to the production API in src/constants/env.ts.
ARG NEXT_PUBLIC_FLUXITY_API_URL
ENV NEXT_PUBLIC_FLUXITY_API_URL=${NEXT_PUBLIC_FLUXITY_API_URL}
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Runner -------------------------------------------------------------
FROM base AS runner
ENV NODE_ENV=production
ENV PORT=3002
ENV HOSTNAME=0.0.0.0

# Run as an unprivileged user.
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# `output: 'standalone'` emits a minimal self-contained server. Copy it plus
# the static assets and public files into their expected locations.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3002

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3002)).then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
