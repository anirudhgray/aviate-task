from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from candidates.urls import router as candidate_router
from django.conf.urls.static import static
from django.conf import settings

router = routers.DefaultRouter()
router.registry.extend(candidate_router.registry)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
