from django.urls import path, include

urlpatterns = [
    path('api-auth-app/', include('api.v1.api_auth_app.urls')),
]
