"""
    Contains choice collections for model fields.
    Add choices here instead of writing them in models.py.
"""

# Menu Item
MENU_ITEM_CHOICES = (("JAIN", "Jain"), ("NON JAIN", "Non Jain"), ("BOTH", "Both"))
MENU_ITEM_CATEGORY = (
    ("CHINESE", "Chinese Food"),
    ("SOUTH INDIAN", "South Indian Food"),
    ("FAST FOOD", "Fast Food"),
    ("DRINKS", "Drinks"),
    ("ITALIAN", "Italian"),
)
# Order.payment_mode
PAYMENT_MODE_CHOICES = (
    ("ONLINE", "Online Payment Gateway"),
    ("COD", "Cash on Counter/ Delivery"),
)

# Order.status
# Dictionary for easy editing or access.
STATUS_DICTIONARY = {
    "Not picked up": -3,
    "Rejected by Canteen": -2,
    "Cancelled by User": -1,
    "New": 0,
    "Preparing": 1,
    "Prepared": 2,
    "En-route": 3,
}

# Create a reversed dictionary from the above
STATUS_DICTIONARY_REVERSE = dict(
    zip(STATUS_DICTIONARY.values(), STATUS_DICTIONARY.keys())
)

# Create a reversed choices list from the above dictionary for Order.status
STATUS_CHOICES = tuple(STATUS_DICTIONARY_REVERSE.items())
