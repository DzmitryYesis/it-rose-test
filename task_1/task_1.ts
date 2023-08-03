import {InputDataType} from './types';
import {MeasureOfLength} from './enum';
import {cmConverter, ftConverter, inConverter, mConverter} from './converter_functions';

const data: InputDataType = {
    distance: {
        unit: MeasureOfLength.METERS,
        value: 0.5
    },
    convert_to: MeasureOfLength.FEET
}


const converter = (obj: InputDataType) => {

    const unit = obj.distance.unit;
    const value = obj.distance.value
    const convert_to = obj.convert_to

    if (unit === MeasureOfLength.METERS) {
        return mConverter(convert_to, value);
    } else if (unit === MeasureOfLength.CENTIMETERS) {
        return cmConverter(convert_to, value);
    } else if (unit === MeasureOfLength.INCHES) {
        return inConverter(convert_to, value)
    } else if (unit === MeasureOfLength.FEET) {
        return ftConverter(convert_to, value);
    } else {
        return 'Some error has occurred. Please check the entered data'
    }
}

console.log(converter(data))