from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.generics import *
# Create your views here.
from .serializers import *
class GetAllEvents(ListAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()



class GetAllProjects(ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class GetContactDetails(CreateAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()