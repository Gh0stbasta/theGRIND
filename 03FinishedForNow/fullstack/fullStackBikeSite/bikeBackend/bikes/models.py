from django.db import models

# Create your models here.
class Bike(models.Model):
    id = models.AutoField(primary_key=True)
    brand = models.CharField(max_length=20)
    modelname = models.CharField(max_length=20)
    weight = models.FloatField()
    cost = models.FloatField()
    img = models.CharField(max_length=1000, null=True, blank=True)


    def __str__(self):
        return f"{self.modelname}"
    
