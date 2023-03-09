from django.db import models


def blog_path(instance, filename):
    return "EventImages/{0}".format(filename)


def project_path(instance, filename):
    return "ProjectImages/{0}".format(filename)


# Create your models here.


class Event(models.Model):
    Event_Choices = [
        ("Upcoming", "Upcoming"),
        ("Ongoing", "Ongoing"),
        ("Past", "Past"),
    ]
    title = models.CharField(max_length=225)
    subtitle = models.CharField(max_length=225)
    description = models.TextField()
    event_type = models.CharField(max_length=225, choices=Event_Choices)
    image = models.ImageField(upload_to=blog_path)


class Project(models.Model):
    Project_Choices = [
        ("Ongoing", "Ongoing"),
        ("Completed", "Completed"),
    ]
    title = models.CharField(max_length=225)
    category = models.CharField(max_length=225)
    project_state = models.CharField(max_length=225, choices=Project_Choices)
    project_type = models.CharField(max_length=225)
    description = models.TextField()
    image = models.ImageField(upload_to=project_path)
    git_repo_link = models.URLField()


class Contact(models.Model):
    position_choices = [
        ("President", "President"),
        ("Member", "Member"),
        ("Volunteer", "Volunteer"),
    ]
    division_choices = [
        ("Competitive Programming", "Competitive Programming"),
        ("Cyber Security", "Cyber Security"),
        ("Software Development", "Software Development"),
    ]
    year_choices = [
        ("First", "First"),
        ("Second", "Second"),
        ("Third", "Third"),
        ("Fourth", "Fourth"),
    ]
    name = models.CharField(max_length=225)
    email = models.EmailField()
    position = models.CharField(max_length=225, choices=position_choices)
    division = models.CharField(max_length=225, choices=division_choices)
    year = models.CharField(max_length=10, choices=year_choices)
    github_profile_link = models.URLField()
    codeforces_profile_link = models.URLField()
    linkedIn_profile_link = models.URLField()
    message = models.TextField()
