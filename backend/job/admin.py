from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import Application, UserApplication

# Apply summernote to all TextField in model.
class ApplicationAdmin(SummernoteModelAdmin):  # instead of ModelAdmin
    summernote_fields = ('text',)

class UserApplicationAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'phone')

admin.site.register(Application, ApplicationAdmin)
admin.site.register(UserApplication, UserApplicationAdmin)