from rest_framework import viewsets
from .models import Candidate
from .serializers import CandidateSerializer
from rest_framework.parsers import MultiPartParser


class CandidateViewSet(viewsets.ModelViewSet):
    parser_classes = [MultiPartParser]
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer
