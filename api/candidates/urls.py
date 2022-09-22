
from rest_framework import routers
from .views import CandidateViewSet


router = routers.SimpleRouter()
router.register("candidates", viewset=CandidateViewSet)

urlpatterns = [
]
