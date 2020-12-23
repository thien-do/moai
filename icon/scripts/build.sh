#!/usr/bin/env bash

set -e

echo "1/5 Clearing previous build..."
rm -rf ./dist

echo "2/5 Generating indexes..."
node ./scripts/make-index.js

echo "3/5 Bundling svgs..."
rollup --config --silent

echo "4/5 Generating declarations..."
tsc --project ./tsconfig.d.json

echo "4/5 Copying static files..."
cp ./package.json ./dist/package.json
