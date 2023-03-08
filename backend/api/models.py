from django.db import models
from .helpers import *
def Blog_path(instance,filename):
    return 'EventImages/{0}'.format(filename)

def Project_path(instance,filename):
    return 'ProjectImages/{0}'.format(filename)
# Create your models here.
class Event(models.Model):
    Event_Choices = [
        ('Upcoming','Upcoming'),
        ('Ongoing','Ongoing'),
        ('Past','Past'),
    ]
    title = models.CharField(max_length=225)
    description = models.TextField()
    event_type = models.CharField(max_length=225,choices = Event_Choices)
    image = models.ImageField(upload_to=Blog_path)

class Project(models.Model):
    title = models.CharField(max_length=225)
    category = models.CharField(max_length=225)
    description = models.TextField()
    image = models.ImageField(upload_to=Project_path)
    git_repo_link = models.URLField()

class Contact(models.Model):
    name = models.CharField(max_length=225)
    email = models.EmailField()
    message = models.TextField()