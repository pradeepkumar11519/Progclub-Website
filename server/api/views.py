from rest_framework.generics import ListAPIView

from .models import Contact, Event, Project
from .serializers import ContactSerializer, EventSerializer, ProjectSerializer


class EventView(ListAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()


class ProjectView(ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()


class ContactView(ListAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
