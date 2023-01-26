from django.db import models
 
class DealerDetails(models.Model):
    id=models.IntegerField(primary_key=True)
    del_name = models.CharField(max_length = 200)
    del_add=models.CharField(max_length = 1000)
    del_id=models.CharField(max_length=50)
    description = models.TextField()
 
    def __str__(self):
        return self.del_name

# Create your models here.
