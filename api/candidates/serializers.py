from rest_framework import serializers
from .models import Candidate, Experience


class CandidateSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Candidate
        fields = ('id', 'firstname', 'lastname', 'department', 'status', 'phone', 'email',
                  'experience_one', 'experience_two', 'self_info', 'save_time', 'resume')


class ExperienceSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Experience
        fields = ('id', 'organisation', 'designation',
                  'description', 'current', 'start', 'end')
