#!/bin/bash
npm run build
rm -rf ../Feat13319/public
cp -R build ../Feat13319
mv ../Feat13319/build ../Feat13319/public
