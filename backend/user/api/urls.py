from user.api.views import MyUserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("api", MyUserViewSet, base_name="users")

urlpatterns = router.urls