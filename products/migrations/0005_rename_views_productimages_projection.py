# Generated by Django 4.0.6 on 2023-01-02 23:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_productimages_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productimages',
            old_name='views',
            new_name='projection',
        ),
    ]
