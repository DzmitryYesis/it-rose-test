/*Конвертировать из cm в футы	ft=cm*0.032808
Конвертировать из cm в метры	m=cm/100
Конвертировать из cm в дюймы	in=cm*0.39370*/

import {MeasureOfLengthType} from '../types';
import {MeasureOfLength} from '../enum';

export const cmConverter = (convert_to: MeasureOfLengthType, value: number) => {
    switch (convert_to) {
        case 'ft':
            return {
                unit: MeasureOfLength.FEET,
                value: Number((value * 0.032808).toFixed(2))
            };
        case 'm':
            return {
                unit: MeasureOfLength.METERS,
                value: Number((value / 100).toFixed(2))
            };
        case 'in':
            return {
                unit: MeasureOfLength.INCHES,
                value: Number((value * 0.39370).toFixed(2))
            };
        default:
            return {
                unit: MeasureOfLength.CENTIMETERS,
                value: value
            }
    }
}