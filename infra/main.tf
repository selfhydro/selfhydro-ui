provider "google" {
  credentials = "${var.credentials}"
  project = "selfhydro-197504"
  region  = "us-central1"
  zone    = "us-central1-c"
}

resource "google_storage_bucket" "selfhydro-ui-bucket" {
    name = "${var.bucket_name}"
    location = "${var.bucket_location}"
    project = "${var.project_id}"
    storage_class = "${var.bucket_storage_class}"

    versioning {
        enabled = "${var.bucket_versioning}"
    }

    website {
        main_page_suffix = "${var.main_page_suffix}"
        not_found_page = "${var.not_found_page}"
    }
}

output "gcp_credentials" {
  value       = google.credentials
  description = "The credentials for authenticating with gcp."
  sensitive   = true
}
