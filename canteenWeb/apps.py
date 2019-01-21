from django.apps import AppConfig


class CanteenwebConfig(AppConfig):
    name = "canteenWeb"

    def ready(self):
        from . import signals
