from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # api's    
    path('api/v1/', include('api.v1.urls')),
]