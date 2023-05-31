from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=50, null=True)

    class Meta:
        managed = False
        db_table = 'category'

class Subcat(models.Model):
    name = models.CharField(max_length=100, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, related_name='categ')

    class Meta:
        managed = False
        db_table = 'subcategory'

class Product(models.Model):
    title = models.CharField(max_length=100, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, related_name='cat')
    subcat = models.ForeignKey(Subcat, on_delete=models.CASCADE, null=True, related_name='type')
    color = models.CharField(max_length=100, null=True)
    description = models.CharField(max_length=1000, null=True)
    price = models.CharField(max_length=100, null=True)

    class Meta:
        managed = False
        db_table = 'product'



