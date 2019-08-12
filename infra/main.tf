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

resource "google_storage_default_object_access_control" "public_rule" {
  bucket = "${google_storage_bucket.selfhydro-ui-bucket.name}"
  role   = "READER"
  entity = "allUsers"
}

resource "google_compute_backend_bucket" "selfhydro-ui-backend" {
  name        = "selfhydro_ui_backend"
  bucket_name = "${google_storage_bucket.selfhydro-ui-bucket.name}"
  enable_cdn  = true
}

resource "google_storage_bucket" "selfhydro-build-artifacts" {
    name = "selfhydro-build-artifacts"
    location = "${var.bucket_location}"
    project = "${var.project_id}"
    storage_class = "${var.bucket_storage_class}"

    versioning {
        enabled = "${var.bucket_versioning}"
    }
}

output "gcp_credentials" {
  value       = google.credentials
  description = "The credentials for authenticating with gcp."
  sensitive   = true
}
