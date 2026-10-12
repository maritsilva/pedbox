CREATE TABLE IF NOT EXISTS user_links (
  id text PRIMARY KEY,
  user_id text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  data jsonb NOT NULL,
  created_date timestamptz NOT NULL DEFAULT now(),
  updated_date timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS user_links_owner ON user_links(user_id, created_date, id);
