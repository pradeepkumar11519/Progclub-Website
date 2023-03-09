from rest_framework.generics import ListAPIView

from .models import Team, Event, Project
from .serializers import TeamSerializer, EventSerializer, ProjectSerializer


class EventView(ListAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()


class ProjectView(ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()


class TeamView(ListAPIView):
    serializer_class = TeamSerializer
    queryset = Team.objects.all()
