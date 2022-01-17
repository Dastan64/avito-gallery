# Тестовое задание для соискателя на должность frontend-стажёра 💻

Моё решение тестового задания на вакансию фронтенд-разработчика. Тестовое задание было в свободном доступе вот [тут](https://github.com/avito-tech/safedeal-frontend-trainee)

## Необходимо было сверстать адаптивную страницу со списком фотографий.

При клике на фотографии открывается модальное окно с фотографией, списком комментариев и формой добавления комментариев.

**SPA написано на React**

Список ручек:

- GET https://boiling-refuge-66454.herokuapp.com/images - получение списка фотографий.
- GET https://boiling-refuge-66454.herokuapp.com/images/:imageId - получения большого изображения и списка комментариев.
- POST https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments - добавление комментария (204 – OK, комментарий не сохраняется).