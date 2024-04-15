# Generated by Django 4.1.13 on 2024-04-15 07:00

import django.contrib.auth.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Animals',
            fields=[
                ('AnimalId', models.AutoField(primary_key=True, serialize=False)),
                ('commonName', models.CharField(max_length=255)),
                ('scientificName', models.CharField(max_length=255)),
                ('classification', models.CharField(max_length=255)),
                ('habitat', models.CharField(max_length=255)),
                ('diet', models.CharField(max_length=255)),
                ('physicalDescription', models.CharField(max_length=255)),
                ('lifespan', models.CharField(max_length=255)),
                ('threats', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Articles',
            fields=[
                ('ArticleId', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.TextField()),
                ('article', models.TextField()),
                ('tags', models.CharField(max_length=255)),
                ('numId', models.IntegerField()),
                ('contributer', models.IntegerField()),
                ('reviewer', models.IntegerField()),
                ('reviewed', models.BooleanField()),
                ('finalised', models.BooleanField()),
                ('date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('contendId', models.IntegerField()),
                ('type', models.SmallIntegerField(choices=[(1, 'Article'), (2, 'Image'), (3, 'Video')])),
                ('feedback', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Images',
            fields=[
                ('ImageId', models.AutoField(primary_key=True, serialize=False)),
                ('caption', models.CharField(max_length=255)),
                ('image', models.FileField(upload_to='')),
                ('tags', models.CharField(max_length=255)),
                ('numId', models.IntegerField()),
                ('contributer', models.IntegerField()),
                ('reviewer', models.IntegerField()),
                ('reviewed', models.BooleanField()),
                ('finalised', models.BooleanField()),
                ('date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Plants',
            fields=[
                ('PlantId', models.AutoField(primary_key=True, serialize=False)),
                ('commonName', models.CharField(max_length=255)),
                ('scientificName', models.CharField(max_length=255)),
                ('classification', models.CharField(max_length=255)),
                ('habitat', models.CharField(max_length=255)),
                ('uses', models.CharField(max_length=255)),
                ('physicalDescription', models.CharField(max_length=255)),
                ('lifespan', models.CharField(max_length=255)),
                ('threats', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Videos',
            fields=[
                ('VideoId', models.AutoField(primary_key=True, serialize=False)),
                ('caption', models.CharField(max_length=255)),
                ('video_file', models.FileField(upload_to='')),
                ('tags', models.CharField(max_length=255)),
                ('numId', models.IntegerField()),
                ('contributor', models.IntegerField()),
                ('reviewer', models.IntegerField()),
                ('reviewed', models.BooleanField()),
                ('finalised', models.BooleanField()),
                ('date', models.DateField()),
                ('thumbnail', models.FileField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(max_length=64, null=True)),
                ('last_name', models.CharField(max_length=64, null=True)),
                ('email', models.CharField(max_length=64, null=True)),
                ('is_staff', models.CharField(max_length=64, null=True)),
                ('is_active', models.IntegerField(default=True)),
                ('date_joined', models.CharField(max_length=64, null=True)),
                ('user_type', models.PositiveSmallIntegerField(choices=[(1, 'Contributor'), (2, 'Organization'), (3, 'Expert_Reviewer')])),
                ('password', models.CharField(max_length=256)),
                ('username', models.CharField(max_length=64, unique=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
    ]