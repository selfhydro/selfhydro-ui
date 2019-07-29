#!/bin/bash

set -ex

cd ./selfhydro-ui
npm i
env CI=true npm test -- --collectCoverage
