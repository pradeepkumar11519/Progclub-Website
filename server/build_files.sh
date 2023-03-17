#!/bin/bash
# Build the project

echo "Building the project..."
python3.9 -m pip install -r requirements.txt

#Run the project

echo "Make Migration..."
python3.9 manage.py makemigrations --noinput