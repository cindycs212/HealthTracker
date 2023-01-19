from .models import Tracker
from .serializers import TrackerSerializer
from rest_framework import viewsets, permissions

class TrackerViewSet(viewsets.ModelViewSet):
    # queryset = Tracker.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TrackerSerializer

    def get_queryset(self):
        return self.request.user.trackers.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
