from channels.generic.websocket import WebsocketConsumer
import json


class CanteenWebConsumer(WebsocketConsumer):
    def connect(self):
        self.user = self.scope["user"]
        self.accept()

    def receive(self, text_data):
        data = json.loads(text_data)
        message = data["message"]

        self.send(text_data=json.dumps({"message": message}))
