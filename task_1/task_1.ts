import {InputDataType} from './types';
import {MeasureOfLength} from './enum';
import {cmConverter, ftConverter, inConverter, mConverter} from './converter_functions';
import {data1, data2} from './data';


const converter = (obj: InputDataType) => {

    const unit = obj.distance.unit;
    const value = obj.distance.value
    const convert_to = obj.convert_to


    // Расширять конвертор можно добалвением коэффициентов для новых длин в объект Rules, а также корректировкой типов(в испольнении без TypeScript можно просто добавить в Rules)

    if (obj.rules) {
        const currentRule = obj.rules.filter((rule) => rule.forUnit === unit)
        return {
            unit: convert_to,
            value: Number((value * currentRule[0].coefficient[convert_to]).toFixed(2))
        }
    }


    // Работа стандартного конвертера
    // Проверка правильности выбора единиц измерения
    if (convert_to !== MeasureOfLength.METERS && convert_to !== MeasureOfLength.CENTIMETERS && convert_to !== MeasureOfLength.INCHES && convert_to !== MeasureOfLength.FEET) {
        return 'Some error has occurred. Please check that you have chosen one of the length options for CONVERT_TO: m, cm, in, ft'
    }

    if (unit === MeasureOfLength.METERS) {
        return mConverter(convert_to, value);
    } else if (unit === MeasureOfLength.CENTIMETERS) {
        return cmConverter(convert_to, value);
    } else if (unit === MeasureOfLength.INCHES) {
        return inConverter(convert_to, value)
    } else if (unit === MeasureOfLength.FEET) {
        return ftConverter(convert_to, value);
    } else {
        return 'Some error has occurred. Please check that you have chosen one of the length options for UNIT: m, cm, in, ft'
    }
}

console.log('Работа стандартного конвертера:  ', converter(data1))
console.log('Работа расширяемого конвертера:  ', converter(data2))