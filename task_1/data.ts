// Данные для работы стандартного конвертера
import {InputDataType} from './types';
import {MeasureOfLength} from './enum';

export const data1: InputDataType = {
    distance: {
        unit: MeasureOfLength.METERS,
        value: 0.5
    },
    convert_to: MeasureOfLength.CENTIMETERS
}


// Данные для конвертера с заданием правил конвертации
export const data2: InputDataType = {
    distance: {
        unit: MeasureOfLength.MILLIMETER,
        value: 10
    },
    convert_to: MeasureOfLength.INCHES,
    rules: [
        {
            forUnit: MeasureOfLength.METERS,
            coefficient: {
                m: 1,
                cm: 100,
                in: 39.37,
                ft: 3.28,
                mm: 1000,
                yd: 1.09,
                km: 0.001
            }
        },
        {
            forUnit: MeasureOfLength.CENTIMETERS,
            coefficient: {
                m: 0.01,
                cm: 1,
                in: 0.39,
                ft: 0.033,
                mm: 10,
                yd: 0.011,
                km: 0.00001
            }
        },
        {
            forUnit: MeasureOfLength.INCHES,
            coefficient: {
                m: 0.0254,
                cm: 2.54,
                in: 1,
                ft: 0.083,
                mm: 25.4,
                yd: 0.028,
                km: 0.000025
            }
        },
        {
            forUnit: MeasureOfLength.FEET,
            coefficient: {
                m: 0.3048,
                cm: 30.48,
                in: 12,
                ft: 1,
                mm: 304.8,
                yd: 0.3333,
                km: 0.0003048
            }
        },
        {
            forUnit: MeasureOfLength.MILLIMETER,
            coefficient: {
                m: 0.001,
                cm: 0.000001,
                in: 0.03937,
                ft: 0.00328,
                mm: 1,
                yd: 0.00109361,
                km: 0.0000001
            }
        },
        {
            forUnit: MeasureOfLength.KILOMETER,
            coefficient: {
                m: 1000,
                cm: 100000,
                in: 39370.1,
                ft: 3280.84,
                mm: 1000000,
                yd: 1093.61,
                km: 1
            }
        },
        {
            forUnit: MeasureOfLength.YARD,
            coefficient: {
                m: 0.9144,
                cm: 91.44,
                in: 36,
                ft: 3,
                mm: 914.4,
                yd: 1,
                km: 0.0009144
            }
        }
    ],

}