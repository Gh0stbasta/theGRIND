# Generated by Django 5.1.5 on 2025-02-03 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bike',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('brand', models.CharField(max_length=20)),
                ('modelname', models.CharField(max_length=20)),
                ('weight', models.FloatField()),
                ('cost', models.FloatField()),
            ],
        ),
    ]
