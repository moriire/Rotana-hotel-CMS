# Generated by Django 4.0.6 on 2022-12-21 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0006_about'),
    ]

    operations = [
        migrations.AlterField(
            model_name='page',
            name='title',
            field=models.CharField(choices=[('home', 'home'), ('about', 'about'), ('team', 'team'), ('contact', 'contact'), ('menu', 'menu'), ('review', 'review')], max_length=15),
        ),
        migrations.AlterField(
            model_name='staff',
            name='img',
            field=models.ImageField(blank=True, upload_to='team'),
        ),
    ]
