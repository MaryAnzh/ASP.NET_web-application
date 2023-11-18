# ASP.NET_web-application
# Test task (Teстовое задание Ващаева Мария)

1. Разработано одностраничное ASP.NET + Angular веб-приложение.
2. Создана БД SQLite

## Cерверная часть:
1. Реализована логика CRUD: GET,  POST, PUT, DELEYE
 (Controllers\ContactController.cs)
2. Модель контакта
Models\Contact.cs

## Пользовательский интерфейс:
1. Приложение реализовано при помощи Angular
2. Запросы на сервер реализованы  в сервисе http-service
ClientApp\src\app\services\httpService\http-service.service.ts
3. Страница приложения:
![image](https://github.com/MaryAnzh/ASP.NET_web-application/assets/89520164/8733ed63-f3e4-4d0f-9060-f65aab1cae16)

- При отсутствии контактов в БД, отображается сообщение об этом, Так же имеются кнопки создания нового контакта и добавления списка из 5 случайно созданных контактов

5. Список контактов:
![image](https://github.com/MaryAnzh/ASP.NET_web-application/assets/89520164/25bcf83c-0a2e-423a-b481-cab7dcde3ac9)

- Список контактов выводится в виде таблицы с полями в соответствии с серверной моделью, с возможностью удалить и редактировать элемента списка при нажатии на соседствующие иконки (edit, delete)
- При уменьшении ширины страницы меняется вид таблицы на вид карточек
![image](https://github.com/MaryAnzh/ASP.NET_web-application/assets/89520164/7f796d7d-45b3-49e6-b59b-698e95ab2978)

6. Pop-up:
![image](https://github.com/MaryAnzh/ASP.NET_web-application/assets/89520164/a631d8d1-87bf-48f7-a1d1-dba3e648fa77)

- Создание и редактирование контактов реализовано в виде pop-up
- Форма ввода данных реализована при помощи ReactiveForms, с их же помощью реализована валидация данных и отображение сообщений об ошибках валидации для пользователя
![image](https://github.com/MaryAnzh/ASP.NET_web-application/assets/89520164/a5af40f9-083e-4b9c-879d-ad2c5242fc84)

![image](https://github.com/MaryAnzh/ASP.NET_web-application/assets/89520164/b0a017d1-eed9-4de1-80e1-23a0a792815d)

## Запуск приложения:

- Для запуска приложения используйте команду в терминале dotnet run

- Для инициализации БД 

dotnet tool install --global dotnet-ef

dotnet ef migrations add InitialCreate

dotnet ef database update

- Для запуска Angular приложения перейдете по ссылке, которая отображена в info, после запуска dotnet run
 Now listening on: https://localhost:***

