from django.urls import path
from .views import *
urlpatterns = [
    path('GetAllEvents/', GetAllEvents.as_view()),
    
    path('GetAllProjects/', GetAllProjects.as_view()),
]
