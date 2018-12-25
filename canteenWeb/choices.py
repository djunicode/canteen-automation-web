"""
    Contains choice collections for model fields.
    Add choices here instead of writing them in models.py.
"""


# Order.payment_mode
PAYMENT_MODE_CHOICES = (
    ('ONLINE', "Online Payment Gateway"),
    ('COD', "Cash on Counter/ Delivery"),
)

# Order.status
# Dictionary for easy editing or access.
STATUS_DICTIONARY = {
    -3: "Not picked up",
    -2: "Rejected by Canteen",
    -1: "Cancelled by User",
    0: "Preparing",
    1: "Prepared",
    2: "En-route",
}

# Create a choices list from the above dictionary for Order.status
STATUS_CHOICES = tuple(STATUS_DICTIONARY.items())
