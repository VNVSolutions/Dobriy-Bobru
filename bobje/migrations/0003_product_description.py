# Generated by Django 3.2.16 on 2022-12-08 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bobje', '0002_auto_20221208_1317'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='description',
            field=models.TextField(blank=True, verbose_name='text'),
        ),
    ]