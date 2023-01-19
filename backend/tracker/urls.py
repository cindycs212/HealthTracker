from rest_framework import routers
from .api import TrackerViewSet

router = routers.DefaultRouter()
router.register('tracker', TrackerViewSet, 'tracker')

urlpatterns = router.urls
