-- Contact form submissions from the website.
CREATE TABLE enquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT NOT NULL,
  email TEXT,
  locality TEXT,
  message TEXT,
  ip_hash TEXT,
  email_sent INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX enquiries_created_at ON enquiries (created_at);
CREATE INDEX enquiries_ip_hash_created_at ON enquiries (ip_hash, created_at);
