# Generated by Django 4.1.1 on 2022-09-22 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('candidates', '0007_alter_candidate_department_alter_candidate_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='candidate',
            name='status',
            field=models.IntegerField(choices=[('Applied', 'Applied'), ('Rejected', 'Rejected'), ('Accepted', 'Accepted')], default='Applied'),
        ),
    ]
