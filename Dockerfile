FROM node:20-slim

WORKDIR /app

# Install wrangler globally
RUN npm install -g wrangler

# Copy project files
COPY . .

EXPOSE 8787

# Default: local dev mode (no Cloudflare account needed)
CMD ["wrangler", "dev", "--local", "--port", "8787", "--host", "0.0.0.0"]
