# Generated by Django 4.0.6 on 2022-12-28 13:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('hotel', '0008_visitlog'),
    ]

    operations = [
        migrations.AlterField(
            model_name='visitlog',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='visited+', to=settings.AUTH_USER_MODEL),
        ),
    ]
