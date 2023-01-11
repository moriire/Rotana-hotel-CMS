# Generated by Django 4.0.6 on 2023-01-11 13:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0012_alter_productimages_thumb'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ads',
            name='imgs',
        ),
        migrations.AddField(
            model_name='ads',
            name='img',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='img+', to='products.productimages'),
            preserve_default=False,
        ),
    ]
