from django.contrib import admin
from django.urls import path

from .views import TeamView, EventView, ProjectView,AlumniView

admin.site.site_header = "The Programming Club"
admin.site.index_title = "Admin Server"
admin.site.site_title = "P; Club"

urlpatterns = [
    path("events/", EventView.as_view()),
    path("projects/", ProjectView.as_view()),
    path("team/", TeamView.as_view()),
    path("alumni/", AlumniView.as_view()),
]
