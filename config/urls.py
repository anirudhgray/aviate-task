from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from candidates.urls import router as candidate_router

router = routers.DefaultRouter()
router.registry.extend(candidate_router.registry)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]
