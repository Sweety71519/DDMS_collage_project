from master.viewset import CityViewset
from rest_framework import routers

router =routers.DefaultRouter()
router.register('city',CityViewset)


