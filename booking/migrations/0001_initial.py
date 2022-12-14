# Generated by Django 4.0.6 on 2022-12-01 15:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('city', models.CharField(blank=True, max_length=30, null=True)),
                ('country', models.CharField(blank=True, max_length=30, null=True)),
                ('address', models.TextField(blank=True, null=True)),
                ('enable', models.BooleanField(default=True)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('contact_of', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='contact+', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
