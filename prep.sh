#! /bin/bash
yarn build
rm -rf reactive
rm reactive.zip
mv build reactive
zip -r reactive.zip reactive