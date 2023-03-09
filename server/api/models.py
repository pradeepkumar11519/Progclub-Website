from django.db import models
from django.utils.html import mark_safe
from django.utils.translation import gettext as _


def blog_path(instance, filename):
    return "EventImages/{0}".format(filename)


def project_path(instance, filename):
    return "ProjectImages/{0}".format(filename)


def image_path(instance, filename):
    return "TeamImages/{0}".format(filename)


class Event(models.Model):
    Event_Choices = [
        ("Upcoming", _("Upcoming")),
        ("Ongoing", _("Ongoing")),
        ("Past", _("Past")),
    ]
    title = models.CharField(_("Event Title"), max_length=225)
    subtitle = models.CharField(_("Subtitle"), max_length=225)
    description = models.TextField(_("Description"))
    type = models.CharField(_("Type"), max_length=225, choices=Event_Choices)
    image = models.ImageField(_("Poster"), upload_to=blog_path)

    @property
    def image_preview(self):
        if self.image:
            return mark_safe(
                '<img src="{}" width="100" height="100" />'.format(self.image.url)
            )
        return ""

    def __str__(self):
        return self.title

    def delete(self, *args, **kwargs):
        self.image.delete()
        super(Event, self).delete(*args, **kwargs)

    class Meta:
        verbose_name = _("Event")
        verbose_name_plural = _("Events")


class Project(models.Model):
    title = models.CharField(_("Project Title"), max_length=225)
    domain = models.CharField(_("Domain"), max_length=225)
    category = models.CharField(_("Category"), max_length=225)
    description = models.TextField(_("Description"))
    image = models.ImageField(_("Image"), upload_to=project_path)
    github = models.URLField(_("Repository"))

    @property
    def image_preview(self):
        if self.image:
            return mark_safe(
                '<img src="{}" width="100" height="100" />'.format(self.image.url)
            )
        return ""

    def __str__(self):
        return self.title

    def delete(self, *args, **kwargs):
        self.image.delete()
        super(Project, self).delete(*args, **kwargs)

    class Meta:
        verbose_name = _("Project")
        verbose_name_plural = _("Projects")
        ordering = ("-category",)


class Team(models.Model):
    position_choices = [
        ("President", _("President")),
        ("Member", _("Member")),
        ("Volunteer", _("Volunteer")),
    ]
    division_choices = [
        ("Competitive Programming", _("Competitive Programming")),
        ("Cyber Security", _("Cyber Security")),
        ("Software Development", _("Software Development")),
    ]
    year_choices = [
        ("First", _("First")),
        ("Second", _("Second")),
        ("Third", _("Third")),
        ("Fourth", _("Fourth")),
    ]
    name = models.CharField(_("Name"), max_length=225)
    email = models.EmailField(_("Email"))
    position = models.CharField(_("Position"), max_length=225, choices=position_choices)
    division = models.CharField(_("Division"), max_length=225, choices=division_choices)
    year = models.CharField(_("Year"), max_length=10, choices=year_choices)
    github = models.URLField(_("GitHub Profile"))
    codeforces = models.URLField(_("Codeforces Profile"))
    linkedin = models.URLField(_("LinkedIn Profile"))
    image = models.ImageField(_("Image"), upload_to=image_path)

    @property
    def image_preview(self):
        if self.image:
            return mark_safe(
                '<img src="{}" width="100" height="100" />'.format(self.image.url)
            )
        return ""

    def __str__(self):
        return self.name

    def delete(self, *args, **kwargs):
        self.image.delete()
        super(Team, self).delete(*args, **kwargs)

    class Meta:
        verbose_name = _("Team")
        verbose_name_plural = _("Team")
