#!/usr/bin/env bash
# Builds the whole site (home page plus the guides) for a release and serves it locally, so you can look at it before flipping the flag.
# Usage: tools/preview-release.sh [version]     e.g. tools/preview-release.sh 1.5   (default 1.5)
# Then open http://localhost:4173/ . Ctrl+C stops it. Nothing is deployed.
set -euo pipefail
cd "$(dirname "$0")/.."
export APP_RELEASE="${1:-1.5}"
echo "Building for APP_RELEASE=$APP_RELEASE ..."
(cd site && npm ci --silent && npm run build)
(cd help && npm ci --silent && npm run build)
rm -rf site/dist/help && mkdir -p site/dist/help && cp -R help/dist/. site/dist/help/
node tools/release-guard.mjs
echo "Preview: http://localhost:4173/  (guides at /help/)"
cd site && npx vite preview --port 4173 --strictPort
