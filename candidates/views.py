from rest_framework import viewsets
from .models import Candidate, Experience
from .serializers import CandidateSerializer, ExperienceSerializer
from rest_framework.parsers import MultiPartParser


class CandidateViewSet(viewsets.ModelViewSet):
    parser_classes = [MultiPartParser]
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer


class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
