from django.db import models
from accounts.models import UserAccount
from fernet_fields import EncryptedDateField, EncryptedIntegerField

# Create your models here.
class Tracker(models.Model):
    start_date = EncryptedDateField()
    end_date = EncryptedDateField()
    duration = EncryptedIntegerField()
    owner = models.ForeignKey(UserAccount, related_name='trackers', on_delete=models.CASCADE, null=True)
