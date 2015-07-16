import sys, os

sys.path.insert(0, '/var/www/PersonalWebsite/')
os.chdir("/var/www/PersonalWebsite/")

from personal_website import app as application
