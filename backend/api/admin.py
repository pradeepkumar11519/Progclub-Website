from django.contrib import admin
from .models import *
# Register your models here.
@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['id','title','description','image']

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['id','title','category','image']

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['id','name','message','email']



from django.contrib.admin import AdminSite


class MyAdminSite(AdminSite):
    # Text to put at the end of each page's <title>.
    site_title = 'Programming Club Backend'

    # Text to put in each page's <h1> (and above login form).
    site_header = 'PClub Backend'

    # Text to put at the top of the admin index page.
    index_title = 'P-Club'

admin_site = MyAdminSite()