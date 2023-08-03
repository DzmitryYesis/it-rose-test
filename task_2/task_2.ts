import {DataType} from './types';
import {data1, data2} from './data'
import {checkKey} from './helpers/checkKey';
import {ErrorTask2} from './enum';
import {includeSorting} from './modules/includeSorting';
import {excludeSorting} from './modules/excludeSorting';

const sorter = (obj: DataType) => {

    const data = obj.data;
    const sort_by = obj.condition.sort_by;

    // В дальнейшем можно добавлять модули и подключать их в условие if()
    // Логика работы приложения следующая:
    // 1. Сразу выполняется наличия условия фильтрации, если выбрано условие, модуль на которое еще отсутствует, выдается ошибка
    // 2. Далее идет проверка наличия ключей по которым должна идти фильрация - если ключей нет, выдается ошибка
    // 3. Если все проверки пройдены, идет фильтрация и сортировка
    if (obj.condition.include) {
        return checkKey(data[0], obj.condition.include) ? includeSorting(data, obj.condition.include, sort_by) : ErrorTask2.KEY_NOT_FOUND
    } else if (obj.condition.exclude) {
        return checkKey(data[0], obj.condition.exclude) ? excludeSorting(data, obj.condition.exclude, sort_by) : ErrorTask2.KEY_NOT_FOUND
    } else {
        return ErrorTask2.BAD_CONDITION
    }
}

console.log('Условие сортировки - включая: ', sorter(data1))
console.log('Условие сортировки - исключая: ', sorter(data2))
