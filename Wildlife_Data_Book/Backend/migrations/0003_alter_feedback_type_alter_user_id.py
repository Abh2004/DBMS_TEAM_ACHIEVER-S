# Generated by Django 4.1.13 on 2024-04-15 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Backend', '0002_alter_feedback_type_alter_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='type',
            field=models.SmallIntegerField(choices=[(3, 'Video'), (1, 'Article'), (2, 'Image')]),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
