#### GET /messages
> Запрос на получение последних 30 сообщений. Возвращает массив с объектами в виде:
```[
    {
    id: String,
    date: String (datetime ISOString),
    author: String,
    message: String
}]

#### POST /messages
> Отправить сообщение в виде объекта:
{
    author: String,
    message: String
}
