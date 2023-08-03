export type MeasureOfLengthType = 'm' | 'cm' | 'in' | 'ft' | 'mm' | 'yd' | 'km'

export type DistanceDataType = {
    unit: MeasureOfLengthType,
    value: number,
}

export type CoefficientType = {
    m: number,
    cm: number,
    in: number,
    ft: number,
    mm: number,
    yd: number,
    km: number
}

export type RulesType = {
    forUnit: string,
    coefficient: CoefficientType
}

export type InputDataType = {
    distance: DistanceDataType,
    rules?: RulesType[]
    convert_to: MeasureOfLengthType,
}

