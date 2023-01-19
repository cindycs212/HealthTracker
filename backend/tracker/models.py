from django.db import models
from accounts.models import UserAccount
from fernet_fields import EncryptedTextField

# Create your models here.
class Tracker(models.Model):
    start_date = models.DateField() # YYYY-MM-DD
    end_date = models.DateField()
    duration = models.IntegerField()
    owner = models.ForeignKey(UserAccount, related_name='trackers', on_delete=models.CASCADE, null=True)
