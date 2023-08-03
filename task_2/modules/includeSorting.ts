import {sort} from '../helpers/sort';

export const includeSorting = (data: object[], conditionValue: object[], sort_by: string[]) => {

    let result = []

// Преобразуем массив объектов в объект
    const include = {};
    for (let i in conditionValue) {
        const condition = conditionValue[i];
        for (let j in condition) {
            include[j] = condition[j]
        }
    }

    //Фильтруем данные согласно условиям
    data.forEach((item) => {
        let flag = true;
        for (let i in item) {
            if (include.hasOwnProperty(i) && include[i] !== item[i]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            result.push(item);
        }
    });

    return {
        result: sort(result, sort_by)
    }
}