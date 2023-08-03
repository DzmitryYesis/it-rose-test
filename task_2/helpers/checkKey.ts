// Если учесть что у нас простое приложение сортировки, работающее
// по заранее заданным правилам, то условно все объекты в массиве
// data имеют одинаковую структуру, поэтому можно передать
// просто первый объект
// Функция проверки входных данных на случай, если в условии
// передадут несуществующие в объектах data ключи
export const checkKey = (dataObj: object, conditionObj: object[]) => {
    const keys = conditionObj.map(obj=>Object.keys(obj)).flat()

    for (let key of keys) {
        if (key in dataObj) {
            return true
        }
    }
    return false
}