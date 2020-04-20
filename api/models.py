from django.db import models


class Nav(models.Model):
    name = models.CharField(max_length=100, primary_key=True)
    fa_icon = models.CharField(max_length=100)
    path = models.URLField(max_length=200)

    def __str__(self):
        return f"Page: {self.name} --- URL:{self.path}"
