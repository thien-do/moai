#!/usr/bin/env bash

set -e

# Sanity check
if [[ -z "$1" ]]; then
    echo "Missing release version (minor or patch)" 1>&2
    exit 1
fi

# Commit new version
version=$(npm version $1)
git add ./package.json ./package-lock.json
git commit -m "Build(icon): @moai/icon $version"

# Actually publish (this must run after creating new version)
npm run build
cd dist/
npm publish --access public
