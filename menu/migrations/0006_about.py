# Generated by Django 4.0.6 on 2022-12-20 14:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('menu', '0005_alter_review_img_alter_room_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.TextField(max_length=256)),
                ('thumb', models.ImageField(blank=True, upload_to='about')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='page_user+', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'About Page',
                'verbose_name_plural': 'About Pages',
            },
        ),
    ]