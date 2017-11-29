#!/usr/bin/env bash
npm run build
cp -r ./src/* .
rm index.js
npm publish
rm -rf ./components
rm -rf ./icons
