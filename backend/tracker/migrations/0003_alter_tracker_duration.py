# Generated by Django 3.2.15 on 2023-01-19 07:24

from django.db import migrations, models
import fernet_fields.fields


class Migration(migrations.Migration):

    dependencies = [
        ('tracker', '0002_tracker_duration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tracker',
            name='duration',
            field=fernet_fields.fields.EncryptedTextField(verbose_name=models.IntegerField()),
        ),
    ]
