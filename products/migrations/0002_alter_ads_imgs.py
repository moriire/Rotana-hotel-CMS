# Generated by Django 4.0.6 on 2023-01-02 21:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ads',
            name='imgs',
            field=models.ManyToManyField(blank=True, to='products.productimages'),
        ),
    ]