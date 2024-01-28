from django.db import models
from django.utils.html import mark_safe
from django.utils.translation import gettext as _
from django_resized import ResizedImageField


def event_path(_instance, filename):
    return f"EventImages/{filename}"


def project_path(_instance, filename):
    return f"ProjectImages/{filename}"


def team_path(_instance, filename):
    return f"TeamImages/{filename}"

def alumni_path(_instance,filename):
    return f"AlumniImages/{filename}"
class Event(models.Model):
    Event_Choices = [
        ("aUpcoming", _("Upcoming")),
        ("bOngoing", _("Ongoing")),
        ("cPast", _("Past")),
    ]
    title = models.CharField(_("Event Title"), max_length=225,blank=True, null=True)
    subtitle = models.CharField(_("Subtitle"), max_length=225,blank=True, null=True)
    description = models.TextField(_("Description"),blank=True, null=True)
    type = models.CharField(_("Type"), max_length=225, choices=Event_Choices,blank=True, null=True)
    image = ResizedImageField(_("Poster"), upload_to=event_path,force_format="WEBP",quality=100)

    @property
    def image_preview(self):
        if self.image:
            return mark_safe(
                f'<img src="{self.image.url}" width="100" height="100" />'
            )
        return ""

    def __str__(self):
        return str(self.title)

    def delete(self, *args, **kwargs):
        self.image.delete()
        super().delete(*args, **kwargs)

    class Meta:
        verbose_name = _("Event")
        verbose_name_plural = _("Events")


class Project(models.Model):
    title = models.CharField(_("Project Title"), max_length=225,blank=True, null=True)
    subtitle = models.CharField(_("Project Subtitle"), max_length=225,blank=True, null=True)
    domain = models.CharField(_("Domain"), max_length=225,blank=True, null=True)
    category = models.CharField(_("Category"), max_length=225,blank=True, null=True)
    description = models.TextField(_("Description"),blank=True, null=True)
    image = ResizedImageField(_("Image"), upload_to=project_path,force_format="WEBP",quality=100)
    github = models.URLField(_("Repository"),blank=True, null=True)

    @property
    def image_preview(self):
        if self.image:
            return mark_safe(
                f'<img src="{self.image.url}" width="100" height="100" />'
            )
        return ""

    def __str__(self):
        return str(self.title)

    def delete(self, *args, **kwargs):
        self.image.delete()
        super().delete(*args, **kwargs)

    class Meta:
        verbose_name = _("Project")
        verbose_name_plural = _("Projects")
        ordering = ("-category",)


class Team(models.Model):
    position_choices = [
        ("aPresident", _("President")),
        ("bMember", _("Member")),
        ("cVolunteer", _("Volunteer")),
    ]
    division_choices = [
        ("aCompetitive Programming", _("Competitive Programming")),
        ("cCyber Security", _("Cyber Security")),
        ("bSoftware Development", _("Software Development")),
    ]
    year_choices = [
        ("dFirst", _("First")),
        ("cSecond", _("Second")),
        ("bThird", _("Third")),
        ("aFourth", _("Fourth")),
    ]
    name = models.CharField(_("Name"), max_length=225,blank=True, null=True)
    email = models.EmailField(_("Email"),blank=True, null=True)
    position = models.CharField(_("Position"), max_length=225, choices=position_choices,blank=True, null=True)
    division = models.CharField(_("Division"), max_length=225, choices=division_choices,blank=True, null=True)
    year = models.CharField(_("Year"), max_length=10, choices=year_choices,blank=True, null=True)
    github = models.URLField(_("GitHub Profile"),blank=True, null=True)
    codeforces = models.URLField(_("Codeforces Profile"),blank=True, null=True)
    linkedin = models.URLField(_("LinkedIn Profile"),blank=True, null=True)
    image = ResizedImageField(_("Image"), upload_to=team_path,force_format="WEBP",quality=100,)
    instagram = models.URLField(_("Instagram Profile"), blank=True, null=True)
    phone_number = models.CharField(_("Phone Number"), max_length=225,blank=True, null=True)
    @property
    def image_preview(self):
        if self.image:
            return mark_safe(
                f'<img src="{self.image.url}" width="100" height="100" />'
            )
        return ""

    def __str__(self):
        return str(self.name)

    def delete(self, *args, **kwargs):
        self.image.delete()
        super().delete(*args, **kwargs)

    class Meta:
        verbose_name = _("Member")
        verbose_name_plural = _("Team")

class Alumni(models.Model):
    division_choices = [
        ("Competitive Programming", _("Competitive Programming")),
        ("Cyber Security", _("Cyber Security")),
        ("Software Development", _("Software Development")),
    ]
    name = models.CharField(_("Alumni's Name"),max_length=225)
    passing_year = models.IntegerField(_("Alumni's Passing Year"))
    division = models.CharField(_("Alumni's Division"), max_length=225, choices=division_choices)
    image = ResizedImageField(_("Image"), upload_to=alumni_path,force_format="WEBP",quality=100)
    LinkedIn_Profile = models.URLField(_("Alumni's LinkedIn Profile"))
    @property
    def image_preview(self):
        if self.image:
            return mark_safe(
                f'<img src="{self.image.url}" width="100" height="100" />'
            )
        return ""
    


