
from rest_framework import routers
from .views import CandidateViewSet, ExperienceViewSet


router = routers.SimpleRouter()
router.register("candidates", viewset=CandidateViewSet)
router.register("experiences", viewset=ExperienceViewSet)

urlpatterns = [
]
