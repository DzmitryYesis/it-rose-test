/*
Конвертировать из дюйма в футы	ft=in*0.083333
Конвертировать из дюйма в метры	m=in/39.370
Конвертировать из дюйма в сантиметры	cm=in/0.39370*/

import {MeasureOfLengthType} from '../types';
import {MeasureOfLength} from '../enum';

export const inConverter = (convert_to: MeasureOfLengthType, value: number) => {
    switch (convert_to) {
        case 'ft':
            return {
                unit: MeasureOfLength.FEET,
                value: Number((value * 0.083333).toFixed(2))
            };
        case 'm':
            return {
                unit: MeasureOfLength.METERS,
                value: Number((value / 39.370).toFixed(2))
            };
        case 'cm':
            return {
                unit: MeasureOfLength.CENTIMETERS,
                value: Number((value / 0.39370).toFixed(2))
            };
        default:
            return {
                unit: MeasureOfLength.INCHES,
                value: value
            }
    }
}
