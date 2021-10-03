#!/usr/bin/env bash
version=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')
name=$(npm view . name)
if npx version-exists $name $version; then
    echo "Skipping Publish as version already exists."
    exit 0
fi

npm run package
npm publish ./package
npm run gh-release