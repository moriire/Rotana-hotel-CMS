# Generated by Django 4.0.6 on 2022-12-23 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0004_alter_booking_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='req',
            field=models.CharField(default='hall', max_length=20),
            preserve_default=False,
        ),
    ]