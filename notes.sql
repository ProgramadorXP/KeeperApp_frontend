CREATE TABLE notes (
	id SERIAL PRIMARY KEY,
	title VARCHAR(100),
	content TEXT,
	created_at timestamp default current_timestamp
);