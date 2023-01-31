from master.viewset import CityCreate,CityList,Cityupdate,CityDelete
from rest_framework import routers

router =routers.DefaultRouter()
router.register('citycreate',CityCreate)
router.register('citydetails',CityList)
router.register('cityupdate',Cityupdate)
router.register('citydelete',CityDelete)



