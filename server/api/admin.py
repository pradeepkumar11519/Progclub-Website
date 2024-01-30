from django.contrib import admin

from .models import Team, Event, Project,Alumni
from django.contrib.admin import RelatedOnlyFieldListFilter
from import_export.admin import ImportExportModelAdmin
from .resources import ProjectResource,EventResource,TeamResource,AlumniResource
# Register your models here.
@admin.register(Event)
class EventAdmin(ImportExportModelAdmin):
    model = Event
    resource_class = EventResource
    search_fields = ("title", "subtitle")
    list_display = ("title", "subtitle", "type","image_preview","created_on","updated_on")
    list_filter = ("type",)
    readonly_fields = ("image_preview",)

    def image_preview(self, obj):
        return obj.image_preview

    image_preview.short_description = "Image Preview"
    image_preview.allow_tags = True
    fieldsets = (
        (
            None,
            {
                "fields": (
                    ("title", "type"),
                    "subtitle",
                    "description",
                    ("image", "image_preview"),
                    ("created_on","updated_on")
                )
            },
        ),
    )


@admin.register(Project)
class ProjectAdmin(ImportExportModelAdmin):
    model = Project
    resource_class = ProjectResource
    search_fields = ("title",)
    list_display = ("title", "image_preview","subtitle","created_on")
    list_filter = ("domain", "category")
    readonly_fields = ("image_preview",)

    def image_preview(self, obj):
        return obj.image_preview

    image_preview.short_description = "Image Preview"
    image_preview.allow_tags = True
    fieldsets = (
        (
            None,
            {
                "fields": (
                    ("title","subtitle"),
                    "github",
                    ("domain", "category"),
                    "description",
                    ("image", "image_preview"),
                    ("created_on","updated_on")
                )
            },
        ),
    )


@admin.register(Team)
class TeamAdmin(ImportExportModelAdmin):
    model = Team
    resource_class = TeamResource
    search_fields = ("name", "email")
    list_display = ("name", "email", "position", "division","year","created_on")
    list_filter = ("position", "division", "year")
    readonly_fields = ("image_preview",)

    
    def image_preview(self, obj):
        return obj.image_preview

    image_preview.short_description = "Image Preview"
    image_preview.allow_tags = True
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "name",
                    ("year", "email"),
                    ("position", "division"),
                    ("image", "image_preview"),
                    "github",
                    "codeforces",
                    "linkedin",
                    ("created_on","updated_on")
                )
            },
        ),
    )

@admin.register(Alumni)
class AlumniAdmin(ImportExportModelAdmin):
    model = Event
    resource_class = Alumni
    search_fields = ("name", "division","passing_year")
    list_display = ("name", "division", "passing_year","image_preview","created_on")
    list_filter = ("division",)
    readonly_fields = ("image_preview",)

    def image_preview(self, obj):
        return obj.image_preview

    image_preview.short_description = "Image Preview"
    image_preview.allow_tags = True
    fieldsets = (
        (
            None,
            {
                "fields": (
                    ("name", "division"),
                    "passing_year",
                    "LinkedIn_Profile",
                    ("image", "image_preview"),
                    ("created_on","updated_on")
                )
            },
        ),
    )