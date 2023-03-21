#!/bin/bash
echo "BUILD START"
python3.9 -m pip install -r requirements.txt

python manage.py makemigrations --noinput
python manage.py migrate --noinput


python manage.py collectstatic --noinput --clear

echo "BUILD END"