from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.get_products),
    path('products/<int:pk>/', views.get_product_detail),
    path('categories/', views.get_categories),
]
