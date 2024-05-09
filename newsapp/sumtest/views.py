from django.shortcuts import render
import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@api_view(['POST'])
#@api_view()
def sumtest(request):
    thisdict = {
        "brand": "Ford",
        "model": "Mustang",
        "year": 1964
    }
    if request.method=='POST':
        try:
            print("hello")
            num1 = float(request.data.get('num1'))
            num2 = float(request.data.get('num2'))
            result = num1 + num2
            return JsonResponse({'result': result})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse(thisdict)
