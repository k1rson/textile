from django.contrib.auth.models import AbstractUser

class UserModel(AbstractUser):
    pass

    class Meta():
        db_table  = 'users_table'
        db_table_comment  = 'tables with users'
        db_tablespace = 'auth_app'
        
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'