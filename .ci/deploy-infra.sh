#!bin/bash

set -ex

cd ./selfhydro-ui

terraform init -input=false
terraform apply -var-file="infra/prod.tfvars" -input=false -auto-approve
