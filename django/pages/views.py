from django.shortcuts import render
import random
from datetime import datetime

# Create your views here.
# urls에 들어온 요청을 처리하는 파일

def index(request):
    return render(request, 'pages/index.html')

def introduce(request,name,age):
   
    context = {
        "name": name, 
        "age":age
        }
    return render(request, "pages/introduce.html", context)

def dinner(request):
    menu=['시저샐러드','아보콥샐러드','새우샐러드']
    pick = random.choice(menu)
    context = {'pick':pick}
    return render(request,'pages/dinner.html',context)

def image(request):
    # context = {"img": "https://picsum.photos/id/" + str(random.randint(1, 100)) + "/200/300"}
    # return render(request, "pages/image.html", context)
    return render(request, "pages/image.html")

def hello(request, name):
    menu = ["짜장면", "햄버거", "치킨", "초밥", "김밥"]
    pick = random.choice(menu)

    context = {
        "name": name, 
        "pick":pick
        }
    return render(request, "pages/hello.html", context)

def times(request, num1,num2):
    context = {
        "num1" : num1,
        "num2" : num2,
        "result" : num1*num2

        }
    return render(request, "pages/times.html", context)

def template_languages(request):
    menus = ['짜장면','시저샐러드','오트밀','삼겹살']
    my_sentence = 'Life is short, you need python.'
    messages = ['apple','banana','cucumber','mango']
    datetimenow = datetime.now()
    empty_list = []
    context={
        'menus' : menus,
        'my_sentence' : my_sentence,
        'datetimenow' : datetimenow,
        'empty_list' : empty_list,
        'messages' : messages
    }
    return render(request,'pages/template_languages.html',context)