from django.shortcuts import render, HttpResponse

# REST Framework
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view()
def addStudent(request):

	return Response({'msg': 'Hello'})
