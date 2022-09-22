# Generated by Django 4.1.1 on 2022-09-21 15:57

from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Candidate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=32)),
                ('lastname', models.CharField(max_length=32)),
                ('department', models.CharField(choices=[('IT', 'IT'), ('SL', 'Sales'), ('RC', 'Recruiting'), ('AC', 'Accounting'), ('MT', 'Materials')], max_length=2)),
                ('status', models.IntegerField(choices=[(0, 'Applied'), (1, 'Rejected'), (2, 'Accepted')])),
                ('phone', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None, unique=True)),
                ('self_info', models.TextField()),
                ('save_time', models.DateTimeField(auto_now_add=True)),
                ('resume', models.FileField(upload_to='uploads/')),
            ],
        ),
    ]