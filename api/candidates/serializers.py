from rest_framework import serializers
from .models import Candidate


class CandidateSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Candidate
        fields = ('id', 'firstname', 'lastname', 'department', 'status', 'phone', 'email',
                  'organisation', 'designation', 'description', 'current', 'start', 'end', 'self_info', 'save_time', 'resume', 'university', 'uni_start', 'uni_end', 'cgpa', 'degree', 'course')
