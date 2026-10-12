CREATE TABLE IF NOT EXISTS contact_submissions (
  id text PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  institution text NOT NULL DEFAULT '',
  reason text NOT NULL DEFAULT '',
  message text NOT NULL,
  status text NOT NULL DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'archived')),
  created_date timestamptz NOT NULL DEFAULT now(),
  updated_date timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS contact_submissions_date_idx ON contact_submissions(created_date DESC);

CREATE INDEX IF NOT EXISTS contact_submissions_status_idx ON contact_submissions(status);

CREATE TABLE IF NOT EXISTS page_hits (
  id text PRIMARY KEY,
  path text NOT NULL,
  category text NOT NULL DEFAULT 'geral',
  device text NOT NULL DEFAULT 'desktop',
  created_date timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS page_hits_date_idx ON page_hits(created_date DESC);

CREATE INDEX IF NOT EXISTS page_hits_path_idx ON page_hits(path);

INSERT INTO contact_submissions (id, name, email, institution, reason, message, status, created_date, updated_date)
SELECT
  id,
  COALESCE(data->>'name', 'Remetente'),
  COALESCE(data->>'email', ''),
  COALESCE(data->>'institution', ''),
  COALESCE(data->>'reason', 'Contato'),
  COALESCE(data->>'message', ''),
  COALESCE(data->>'status', 'unread'),
  created_date,
  updated_date
FROM notes
WHERE data->>'type' = 'contact_message'
ON CONFLICT (id) DO NOTHING;
