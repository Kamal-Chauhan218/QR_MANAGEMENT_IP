from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
import datetime


# Create your models here.


class Address(models.Model):
	street = models.CharField(max_length=400)
	city = models.CharField(max_length=100)
	pin_code = models.IntegerField()


PUNJAB = 'PB'
HIMACHAL = 'HP'
CAMPUS_CHOICES = (
	(PUNJAB, 'Punjab'),
	(HIMACHAL, 'Himachal')
)


class College(models.Model):
	batch_start_year = models.PositiveSmallIntegerField()
	batch_end_year = models.PositiveSmallIntegerField()
	campus = models.CharField(max_length=40, choices=CAMPUS_CHOICES, default=PUNJAB)
	dean = models.CharField(max_length=255, null=True, blank=True)
	mentor = models.CharField(max_length=255, null=True, blank=True)


BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
BLOOD_GROUP__CHOICES = [
	(BLOOD_GROUPS[0], BLOOD_GROUPS[0]),
	(BLOOD_GROUPS[1], BLOOD_GROUPS[1]),
	(BLOOD_GROUPS[2], BLOOD_GROUPS[2]),
	(BLOOD_GROUPS[3], BLOOD_GROUPS[3]),
	(BLOOD_GROUPS[4], BLOOD_GROUPS[4]),
	(BLOOD_GROUPS[5], BLOOD_GROUPS[5]),
	(BLOOD_GROUPS[6], BLOOD_GROUPS[6]),
	(BLOOD_GROUPS[7], BLOOD_GROUPS[7]),
]

GENDERS = ['M', 'F', 'O']
GENDER_CHOICES = [
	(GENDERS[0], 'Male'),
	(GENDERS[1], 'Female'),
	(GENDERS[2], 'Other'),
]


class CustomUserManager(BaseUserManager):
	def _create_user(self, email, password, first_name, last_name=None, **extra_fields):
		if(not email):
			raise ValueError("Email must be Provided")
		if(not password):
			raise ValueError("Password is not Provided")

		user = self.model(
			email = self.normalize_email(email),
			first_name=first_name,
			last_name=last_name,
			**extra_fields
		)

		user.set_password(password)
		user.save(using=self.db)

		return user

	def create_user(self, email, password, first_name, last_name=None, **extra_fields):
		extra_fields.setdefault('is_staff', False)
		extra_fields.setdefault('is_active', True)
		extra_fields.setdefault('is_superuser', False)

		return self._create_user(email, password, first_name, last_name, **extra_fields)

	def create_superuser(self, email, password, first_name, last_name=None, **extra_fields):
		extra_fields.setdefault('is_staff', True)
		extra_fields.setdefault('is_active', True)
		extra_fields.setdefault('is_superuser', True)

		if(extra_fields.get('is_staff') is not True):
			raise ValueError('SuperUser must have is_staff=True.')
		if(extra_fields.get('is_superuser') is not True):
			raise ValueError('SuperUser must have is_superuser=True.')

		return self._create_user(email, password, first_name, last_name, **extra_fields)

class Student(AbstractBaseUser, PermissionsMixin):
	email = models.EmailField(max_length=254, db_index=True, unique=True)
	contact_number = models.IntegerField()

	first_name = models.CharField(max_length=255)
	last_name = models.CharField(max_length=255, null=True, blank=True)
	profile_pic = models.ImageField(max_length=500, upload_to='Profile Pics/Users')
	dob = models.DateField(default=datetime.date.today, auto_now_add=False)
	age = models.IntegerField()

	blood_group = models.CharField(max_length=3, choices=BLOOD_GROUP__CHOICES, default=BLOOD_GROUPS[0])
	gender = models.CharField(max_length=6, choices=GENDER_CHOICES, default=GENDERS[0])

	address = models.OneToOneField(Address, on_delete=models.CASCADE)
	college = models.ForeignKey(College, on_delete=models.CASCADE)

	is_day_scholar = models.BooleanField(default=True)

	objects = CustomUserManager()

	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['first_name']

	class Meta:
		verbose_name = 'Student'
		verbose_name_plural = 'Students'