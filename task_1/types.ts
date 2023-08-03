export type MeasureOfLengthType = 'm' | 'cm' | 'in' | 'ft'

export type DistanceDataType = {
    unit: MeasureOfLengthType,
    value: number,
}

export type InputDataType = {
    distance: DistanceDataType,
    convert_to: MeasureOfLengthType,
}

