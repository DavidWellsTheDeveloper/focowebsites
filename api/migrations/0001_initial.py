# Generated by Django 3.0.4 on 2020-04-19 22:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Nav',
            fields=[
                ('name', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('fa_icon', models.CharField(max_length=100)),
            ],
        ),
    ]