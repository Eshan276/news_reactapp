from django.shortcuts import render
import requests
from django.http import JsonResponse
def home(request):
    category=request.GET.get('category')
    country='in'
    api_key = '25d2fd9ddb614f5eaa45ffd81c4c4e6a'
    if (category):
        if(category=='latest news'):
            api_url = f'https://newsapi.org/v2/top-headlines?country={country}&apiKey=25d2fd9ddb614f5eaa45ffd81c4c4e6a'
        else:
            api_url = f'https://newsapi.org/v2/top-headlines?country={country}&category={category}&apiKey=25d2fd9ddb614f5eaa45ffd81c4c4e6a'
    else:
        api_url = f'https://newsapi.org/v2/top-headlines?country={country}&apiKey=25d2fd9ddb614f5eaa45ffd81c4c4e6a'
    
    try:
        response = requests.get(api_url)
        data = response.json()
        
        print(data)
        return JsonResponse(data)
    except Exception as e:
        
        print('Error fetching news:', e)
        
        return JsonResponse({'error': 'Error fetching news data'}, status=500)
    
