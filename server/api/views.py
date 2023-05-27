from rest_framework.generics import ListAPIView

from .models import Team, Event, Project,Alumni
from .serializers import TeamSerializer, EventSerializer, ProjectSerializer,AlumniSerializer

from rest_framework.filters import OrderingFilter


class EventView(ListAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
    def get_queryset(self):
        return Event.objects.all().order_by('type')

class ProjectView(ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()


class TeamView(ListAPIView):
    serializer_class = TeamSerializer
    def get_queryset(self):
        return Team.objects.all().order_by('division','position')
    
    
class AlumniView(ListAPIView):
    serializer_class = AlumniSerializer
    queryset = Alumni.objects.all()


