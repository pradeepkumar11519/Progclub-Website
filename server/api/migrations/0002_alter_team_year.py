# Generated by Django 4.1.7 on 2024-01-28 13:01

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="team",
            name="year",
            field=models.CharField(
                blank=True,
                choices=[
                    ("dFirst", "First"),
                    ("cSecond", "Second"),
                    ("bThird", "Third"),
                    ("aFourth", "Fourth"),
                ],
                max_length=10,
                null=True,
                verbose_name="Year",
            ),
        ),
    ]
