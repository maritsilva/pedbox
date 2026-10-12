CREATE TABLE IF NOT EXISTS platform_settings (
  key text PRIMARY KEY,
  value text NOT NULL DEFAULT '',
  updated_date timestamptz NOT NULL DEFAULT now()
);

INSERT INTO platform_settings (key, value)
VALUES
  ('google_site_verification', ''),
  ('google_analytics_id', '')
ON CONFLICT (key) DO NOTHING;
