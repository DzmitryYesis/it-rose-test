import {sort} from '../helpers/sort';

export const excludeSorting = (data: object[], conditionValue: object[], sort_by: string[]) => {

    let result = []

// Преобразуем массив объектов в объект
    const exclude = {};
    for (let i in conditionValue) {
        const condition = conditionValue[i];
        for (let j in condition) {
            exclude[j] = condition[j]
        }
    }

    //Фильтруем данные согласно условиям
    data.forEach((item) => {
        let flag = true;
        for (let i in item) {
            if (exclude.hasOwnProperty(i) && exclude[i] === item[i]) {
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