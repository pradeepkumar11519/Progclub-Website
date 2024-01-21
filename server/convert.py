from sqlalchemy import create_engine
import json

# Connect to the SQLite database
sqlite_engine = create_engine('sqlite:///path/to/local_db.sqlite3')

# Connect to the PostgreSQL database
postgres_engine = create_engine('postgresql://external_db_user:external_db_password@external_db_host:external_db_port/external_db_name')

# Load data from the SQLite dump file
with open('data.json') as f:
    data = json.load(f)

# Convert data from SQLite to PostgreSQL format
for item in data:
    sqlite_engine.execute(f"INSERT INTO {item['model']} ({', '.join(item['fields'].keys())}) VALUES ({', '.join([f'%({k})s' for k in item['fields'].keys()])})", **item['fields'])

# Close the database connections
sqlite_engine.dispose()
postgres_engine.dispose()

