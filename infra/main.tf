provider "google" {
  credentials = "${var.credentials}"
  project = "selfhydro-197504"
  region  = "us-central1"
  zone    = "us-central1-c"
}

output "gcp_credentials" {
  value       = google.credentials
  description = "The credentials for authenticating with gcp."
  sensitive   = true
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
  name        = "selfhydro-ui-backend"
  bucket_name = "${google_storage_bucket.selfhydro-ui-bucket.name}"
  enable_cdn  = true
}

resource "google_compute_global_address" "selfhydro-ui" {
  name = "selfhydro-ui"
}

resource "google_compute_global_forwarding_rule" "selfhydro-ui" {
  name       = "selfhydro-ui-port-80"
  ip_address = "${google_compute_global_address.selfhydro-ui.address}"
  port_range = "80"
  target     = "${google_compute_target_http_proxy.selfhydro-ui.self_link}"
}

resource "google_compute_target_http_proxy" "selfhydro-ui" {
  name    = "selfhydro-ui"
  url_map = "${google_compute_url_map.selfhydro-ui.self_link}"
}

resource "google_compute_url_map" "selfhydro-ui" {
  name        = "selfhydro-ui"
  default_service = "${google_compute_backend_bucket.selfhydro-ui-backend.self_link}"
}
