#!/bin/bash

set -ex

cd ./selfhydro-ui

npm i
npm run build

mv build ../selfhydro-ui-build/selfhydro-ui-release-$(cat /version/version)
