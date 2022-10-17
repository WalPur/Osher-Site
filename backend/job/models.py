from django.db import models



class Application(models.Model):
    Application_Types = (
        ("Intern", "Стажировка"),
        ("Vacancy", "Вакансия"),
    )

    type = models.CharField(max_length=11,
                        choices=Application_Types,
                        default="Intern",)
    title = models.TextField(verbose_name="Название вакансии/стажировки")
    short_description = models.TextField(verbose_name="Краткое описание")
    text = models.TextField(verbose_name="Текст вакансии")

    def __str__(self):
        return self.title
    


class UserApplication(models.Model):
    full_name = models.TextField(verbose_name="ФИО")
    email = models.TextField("Почта")
    phone = models.TextField("Телефон")
    message = models.TextField("Сообщение")
    application = models.ForeignKey(Application, on_delete=models.CASCADE)

    def __str__(self):
        return self.full_name