from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from .forms import ContactForm

def home(request):
    return render(request, 'home.html')

def o_mnie (request):
    return render (request, 'o_mnie.html')

def konsultacje (request):
    return render (request, 'konsultacje.html')

def porady (request):
    return render (request, 'porady.html')

def quiz (request):
    return render (request, 'quiz.html')

def szkolenia (request):
    return render (request, 'szkolenia.html')
def galeria (request):
    return render (request, 'galeria.html')


from django.core.mail import send_mail
from django.shortcuts import render
from django.conf import settings

def kontakt(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        full_message = f"Wiadomość od: {name} ({email})\n\nTreść:\n{message}"

        # Uzupełnij te dane przed opublikowaniem strony!
        send_mail(
            subject="Wiadomość z formularza kontaktowego Psieszkoleni",
            message=full_message,
            from_email="twoj_email@gmail.com",  # <-- ✏️ ZMIEŃ na e-mail właścicielki
            recipient_list=["odbiorca@gmail.com"],  # <-- ✏️ ZMIEŃ na e-mail docelowy
            fail_silently=False,
        )

    return render(request, "kontakt.html")
