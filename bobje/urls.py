from django.urls import path, include
from . import views


app_name = 'bobje'
urlpatterns = [
    path('', views.index, name='index'),
    path('eng/', views.eng, name='eng'),
    path('support/', views.support, name='support'),
    path('supporteng/', views.supporteng, name='supporteng')
]