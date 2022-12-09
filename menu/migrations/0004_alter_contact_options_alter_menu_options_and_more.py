# Generated by Django 4.0.6 on 2022-12-09 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0003_contact'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contact',
            options={'verbose_name': 'contact', 'verbose_name_plural': 'Contact Section'},
        ),
        migrations.AlterModelOptions(
            name='menu',
            options={'verbose_name': 'Menu', 'verbose_name_plural': 'Food & Drink Section'},
        ),
        migrations.AlterModelOptions(
            name='room',
            options={'verbose_name': 'contact', 'verbose_name_plural': 'Rooms and Suites Section'},
        ),
        migrations.AlterField(
            model_name='contact',
            name='phone',
            field=models.CharField(blank=True, max_length=11, null=True),
        ),
    ]
