#!/bin/bash

set +e +x

echo ${CREDENTIALS} >> key.json
unset CREDENTIALS

set -ex

gcloud auth activate-service-account selfhydro-197504@appspot.gserviceaccount.com --key-file key.json --project selfhydro-197504
gcloud config list

tar -xvzf gcs-artifact-bucket/*.tar.gz

gsutil cp -r build gs://www.selfhydro.com

rm key.json
