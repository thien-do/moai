#!/usr/bin/env bash

set -e

echo "1/3 Clearing previous build..."
rm -rf ./dist

echo "2/3 Bundling via Rollup..."
rollup --config --silent

echo "3/3 Generating declarations via TypeScript compiler..."
tsc --project ./tsconfig.d.json
