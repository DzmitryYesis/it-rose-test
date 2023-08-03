//Этот тип в последствии расширяем для подключения различных модулей сортировки
export type ConditionType = {
    include?:object[],
    exclude?:object[],
    test?:object[]
    sort_by:string[]
}

export type DataType = {
    data: object[],
    condition: ConditionType
}