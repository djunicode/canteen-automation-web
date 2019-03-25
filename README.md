# canteen-web-app
[![Waffle.io - Columns and their card count](https://badge.waffle.io/djunicode/canteen-automation-web.svg?columns=all)](https://waffle.io/djunicode/canteen-automation-web)
<br>
Repository for the Unicode 2018 project Canteen ordering and queueing system.

Django: 2.1.4
<br>
Python: 3.6.4


## Use following commands to run this project
``` bash
pip3 install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```

**Note:** 1) Before adding or commiting to git, please run `black canteenAutomation/`, `black canteenWeb/` and `black canteenApp/` inside this directory. This is important because we are using Black code formatter for this project and Travis build will fail otherwise.
<br>
2) The database we are using is sqllite3 for the prototype. We may change it to PostgreSQL later.

