#!/bin/bash

set -ex

npm install -g firebase-tools

tar -xvzf gcs-artifact-bucket/*.tar.gz
mv build selfhydro-ui/
cd ./selfhydro-ui
firebase deploy --token "$FIREBASE_TOKEN"
