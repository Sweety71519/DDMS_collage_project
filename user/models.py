from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager

# Create your models here.

class UserAuthorization(BaseUserManager):
    pass


class UserInformation(PermissionsMixin,AbstractBaseUser):
    user_name=models.CharField(max_length=250)
    email=models.EmailField(db_index=True,unique=True,max_length=250)
    employeecode=models.EmailField(unique=True,max_length=25)
    created_at=models.DateTimeField()
    updated_at=models.DateTimeField()
    is_active=models.BooleanField(default=False)



	# username varchar(40) NOT NULL,
	# employeecode varchar(20) NULL,
	# created_at timestamp(3) NULL,
	# updated_at timestamp(3) NULL,
	# isactive bool NULL,
	# "password" varchar NULL,
	# id bigserial NOT NULL,
	# user_type varchar(200) NULL,
	# CONSTRAINT pk_username PRIMARY KEY (username)
