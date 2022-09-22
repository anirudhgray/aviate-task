from distutils.command.upload import upload
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.utils import timezone
import os


class Experience(models.Model):
    organisation = models.CharField(max_length=64, null=False, blank=False)
    designation = models.CharField(max_length=32, null=False, blank=False)
    description = models.TextField()
    current = models.BooleanField(null=False)
    start = models.DateField(null=False, blank=False)
    end = models.DateField(blank=True)


def upload_to(instance, filename):
    now = timezone.now()
    base, extension = os.path.splitext(filename.lower())
    milliseconds = now.microsecond // 1000
    return f"resumes/{instance.pk}/{now:%Y%m%d%H%M%S}{milliseconds}{extension}"


class Candidate(models.Model):
    firstname = models.CharField(max_length=32, null=False, blank=False)
    lastname = models.CharField(max_length=32, null=False, blank=False)

    IT = 'IT'
    SALES = 'SL'
    RECRUITING = 'RC'
    ACCOUNTING = 'AC'
    MATERIALS = 'MT'
    DEPARTMENT_CHOICES = [
        (IT, 'IT'),
        (SALES, 'Sales'),
        (RECRUITING, 'Recruiting'),
        (ACCOUNTING, 'Accounting'),
        (MATERIALS, 'Materials'),
    ]
    department = models.CharField(
        max_length=2, choices=DEPARTMENT_CHOICES, null=False, blank=False)

    APPLIED = 0
    REJECTED = 1
    ACCEPTED = 2
    STATUS_CHOICES = [
        (APPLIED, 'Applied'),
        (REJECTED, 'Rejected'),
        (ACCEPTED, 'Accepted'),
    ]
    status = models.IntegerField(
        choices=STATUS_CHOICES, null=False, blank=False)

    phone = PhoneNumberField(null=False, blank=False, unique=True)
    email = models.EmailField(null=False, blank=False,)

    experience_one = models.OneToOneField(
        Experience, on_delete=models.CASCADE, null=True, blank=True, related_name='cand')
    experience_two = models.OneToOneField(
        Experience, on_delete=models.CASCADE, null=True, blank=True)

    self_info = models.TextField()
    save_time = models.DateTimeField(auto_now_add=True)
    resume = models.FileField("resume",
                              upload_to=upload_to, max_length=255, null=True, blank=True)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
