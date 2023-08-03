/*
Конвертировать из метров в сантиметры	cm=m/0.01
Конвертировать из метров в дюймы	in=m*39.370
Конвертировать из метров в футы	ft=m*3.2808
*/

import {MeasureOfLengthType} from '../types';
import {MeasureOfLength} from '../enum';

export const mConverter = (convert_to: MeasureOfLengthType, value: number) => {
    switch (convert_to) {
        case 'cm':
            return {
                unit: MeasureOfLength.CENTIMETERS,
                value: Number((value / 0.01).toFixed(2))
            };
        case 'in':
            return {
                unit: MeasureOfLength.INCHES,
                value: Number((value * 39.370).toFixed(2))
            }
        case 'ft':
            return {
                unit: MeasureOfLength.FEET,
                value: Number((value * 3.2808).toFixed(2))
            }
        default:
            return {
                unit: MeasureOfLength.METERS,
                value: value
            }
    }
}