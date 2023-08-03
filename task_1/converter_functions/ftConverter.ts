/*
Конвертировать из футов в дюймы	in=ft*12
Конвертировать из футов в метры	m=ft/3.2808
Конвертировать из футов в сантиметры cm=ft/0.032808*/

import {MeasureOfLengthType} from '../types';
import {MeasureOfLength} from '../enum';

export const ftConverter = (convert_to: MeasureOfLengthType, value: number) => {
    switch (convert_to) {
        case 'in':
            return {
                unit: MeasureOfLength.INCHES,
                value: Number((value * 12).toFixed(2))
            };
        case 'm':
            return {
                unit: MeasureOfLength.METERS,
                value: Number((value / 3.2808).toFixed(2))
            };
        case 'cm':
            return {
                unit: MeasureOfLength.CENTIMETERS,
                value: Number((value / 0.032808).toFixed(2))
            };
        default:
            return value
    }
}