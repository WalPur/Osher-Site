from django.contrib import admin
from .models import Client


class ClientAdmin(admin.ModelAdmin):
    list_display = ("full_name", "company", "budget")

admin.site.register(Client, ClientAdmin)