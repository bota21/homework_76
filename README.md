#### GET /messages

> Запрос на получение последних 30 сообщений. Возвращает массив с объектами в виде:

```
[
  {
    id: String,
    date: String (datetime ISOString),
    author: String,
    message: String
  }
]
```

> Для получения сообщении отправить запрос на endpoint: <br>
> http://localhost:8000/messages

> Для получения определенного количества сообщении отправить запрос на endpoint:<br>
> http://localhost:8000/messages?datetime={date}

date - дата определенного объекта в сообщениях. <br>
Возвращает массив с объектами с последующими сообщениями.<br>
Если указанный date был последним в массиве, вернется пустой массив.

#### POST /messages

> Отправить сообщение в виде объекта:

```
{
    author: String,
    message: String
}
```

> Еndpoind для отправки сообщения: <br>
> http://localhost:8000/messages
