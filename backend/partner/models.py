from django.db import models

class Client(models.Model):
    Partner_Types = (
        ("Client", "Клиент"),
        ("Partner", "Партнер"),
    )
    Budget = (
        ("<1", "до 1 млн рублей"),
        ("1:3", "от 1 до 3 млн рублей"),
        ("3:5", "от 3 до 5 млн рублей"),
        ("5:10", "от 5 до 10 млн рублей"),
        (">10", "от 10 млн рублей"),
    )
    type = models.CharField(max_length=11,
                        choices=Partner_Types,
                        default="Client",)
    full_name = models.TextField(verbose_name='ФИО')
    phone = models.TextField(verbose_name='Телефон')
    company = models.TextField(verbose_name="Название компании")
    email = models.TextField(verbose_name="Электронная почта")
    budget = models.CharField(max_length=11,
                        choices=Budget,
                        default="<1",
                        blank=True)
    message = models.TextField("Сообщение")
