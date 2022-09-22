from distutils.command.upload import upload
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.utils import timezone
import os


def upload_to(instance, filename):
    now = timezone.now()
    base, extension = os.path.splitext(filename.lower())
    milliseconds = now.microsecond // 1000
    return f"resumes/{instance.pk}/{now:%Y%m%d%H%M%S}{milliseconds}{extension}"


class Candidate(models.Model):
    firstname = models.CharField(max_length=32, null=False, blank=False)
    lastname = models.CharField(max_length=32, null=False, blank=False)

    IT = 'IT'
    SALES = 'Sales'
    RECRUITING = 'Recruiting'
    ACCOUNTING = 'Accounting'
    MATERIALS = 'Materials'
    DEPARTMENT_CHOICES = [
        (IT, 'IT'),
        (SALES, 'Sales'),
        (RECRUITING, 'Recruiting'),
        (ACCOUNTING, 'Accounting'),
        (MATERIALS, 'Materials'),
    ]
    department = models.CharField(
        max_length=16, choices=DEPARTMENT_CHOICES, null=False, blank=False)

    APPLIED = 'Applied'
    REJECTED = 'Rejected'
    ACCEPTED = 'Accepted'
    STATUS_CHOICES = [
        (APPLIED, 'Applied'),
        (REJECTED, 'Rejected'),
        (ACCEPTED, 'Accepted'),
    ]
    status = models.CharField(
        choices=STATUS_CHOICES, max_length=16, default='Applied', null=False, blank=False)

    phone = PhoneNumberField(null=False, blank=False, unique=True)
    email = models.EmailField(null=False, blank=False,)

    self_info = models.TextField(null=False, blank=True)
    save_time = models.DateTimeField(auto_now_add=True)
    resume = models.FileField("resume",
                              upload_to=upload_to, max_length=255, null=True, blank=True)

    organisation = models.CharField(max_length=64, null=True, blank=True)
    designation = models.CharField(max_length=32, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    current = models.BooleanField(null=True, default=False)
    start = models.DateField(null=True, blank=True)
    end = models.DateField(blank=True, null=True)

    university = models.CharField(max_length=64, null=True, blank=True)
    degree = models.CharField(max_length=32, null=True, blank=True)
    course = models.CharField(max_length=32, null=True, blank=True)
    cgpa = models.CharField(max_length=5, null=True, blank=True)
    uni_start = models.DateField(null=True, blank=True)
    uni_end = models.DateField(blank=True, null=True)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
