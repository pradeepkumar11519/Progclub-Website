from django.contrib import admin

from .models import Team, Event, Project,Alumni
from django.contrib.admin import RelatedOnlyFieldListFilter

# Register your models here.
@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    model = Event
    search_fields = ("title", "subtitle")
    list_display = ("title", "subtitle", "type","image_preview")
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
                )
            },
        ),
    )


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    model = Project
    search_fields = ("title",)
    list_display = ("title", "image_preview","subtitle")
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
                )
            },
        ),
    )


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    model = Team
    search_fields = ("name", "email")
    list_display = ("name", "email", "position", "division","year")
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
                )
            },
        ),
    )

@admin.register(Alumni)
class AlumniAdmin(admin.ModelAdmin):
    model = Event
    search_fields = ("name", "division","passing_year")
    list_display = ("name", "division", "passing_year","image_preview")
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
                )
            },
        ),
    )