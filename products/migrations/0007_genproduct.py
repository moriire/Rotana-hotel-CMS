# Generated by Django 4.0.6 on 2023-01-03 09:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_remove_product_thumbs_remove_productimages_user_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='GenProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('images', models.ManyToManyField(blank=True, to='products.productimages')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gen_product+', to='products.product')),
            ],
        ),
    ]