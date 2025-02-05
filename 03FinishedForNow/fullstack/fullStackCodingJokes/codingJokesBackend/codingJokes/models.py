from django.db import models

# Create your models here.


class CodingJoke(models.Model):
    id = models.AutoField(primary_key=True)
    joke = models.CharField(max_length=1000)
    punchline = models.CharField(max_length=1000)

    def __str__(self):
        return f"Joke Number: {self.id}"