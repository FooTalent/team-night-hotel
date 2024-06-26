from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.getenv('DEBUG')

ALLOWED_HOSTS = [os.getenv('ALLOWED_HOSTS'),]

# Application definition
BASE_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.sessions', 
    'django.contrib.contenttypes',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
THIRD_APPS = [
    'rest_framework',
    'rest_framework.authtoken',
    'drf_spectacular',
    'corsheaders',
]

OWN_APPS = [
    'apps.quotation',
    'apps.reservation',
    'apps.client',
    'apps.room',
]

INSTALLED_APPS = BASE_APPS + THIRD_APPS + OWN_APPS

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'Oceano.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'Oceano.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    'default': {
        "ENGINE": "django.db.backends.sqlite3",
        # remove  the "DB_NAME" variable from .env to use sqlite3
        "NAME": os.getenv("DB_NAME", BASE_DIR / "db.sqlite3"),
        "HOST": os.getenv("DB_HOST"),
        "USER": os.getenv("DB_USER"),
        "PASSWORD": os.getenv("DB_PASSWORD"),
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'es-AR'

TIME_ZONE = 'America/Buenos_Aires'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

#Rest framework setting
REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS':'drf_spectacular.openapi.AutoSchema',
    'DEFAULT_AUTHENTICATION_CLASSES':(
        'rest_framework.authentication.TokenAuthentication',
    ),
}

#Espectacular Schema setting
SPECTACULAR_SETTINGS = {
    'TITLE': 'Hotel Oceano',
    'DESCRIPTION': 'Api para consultar la disponibilidad y cotizacion de habitaciones',
    'VERSION': '1.0.0',
    'SERVE_INCLUDE_SCHEMA': False,
}

#Configuración de CORS
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOWED_ORIGINS = [os.getenv("CORS_ALLOWED_ORIGINS"),]