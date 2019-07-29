#!bin/bash

cd ./infra

terraform apply \
  -var-file="secret.tfvars" \
  -var-file="prod.tfvars"
