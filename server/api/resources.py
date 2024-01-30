from import_export import resources 
from .models import Project,Alumni,Event,Team
class ProjectResource(resources.ModelResource):
     class Meta:
         model = Project


class AlumniResource(resources.ModelResource):
     class Meta:
         model = Alumni


class EventResource(resources.ModelResource):
     class Meta:
         model = Event



class TeamResource(resources.ModelResource):
     class Meta:
         model = Team

