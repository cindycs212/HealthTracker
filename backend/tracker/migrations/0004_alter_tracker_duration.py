# Generated by Django 3.2.15 on 2023-01-19 07:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracker', '0003_alter_tracker_duration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tracker',
            name='duration',
            field=models.IntegerField(),
        ),
    ]
