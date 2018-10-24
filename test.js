describe('Запрос списка пользователей', () => {
    var result
    var list
    before(async () => {
        list = await fetch('http://89.108.65.123/user')
            .then(res => {
                result = res;
                return res.json();
            })
            .then(list => list)
            .catch(e => {})
    })
    it('Успешный ответ сервера', () => {
        assert.equal(result.status, 200)
    })
    it(`Получен список пользователей`, () => {

        assert.isDefined(list)
    })
})



/*
describe('Добавление пользователя на сервер', () => {
    var result
    before(async () => {
        result = await fetch('http://89.108.65.123/user/', {
                method: 'POST',
                body: JSON.stringify({
                    name: 'name',
                    email: 'email',
                    age: 0
                })
            })
            .then(res => res)
            .catch(e => {})
    })
    it('Успешный ответ сервера', () => {
        assert.equal(result.status, 200)
    })
});
*/
