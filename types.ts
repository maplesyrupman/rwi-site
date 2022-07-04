export type Question = {
    label: string,
    type: string,
    id: string,
    value: any,
    required?: boolean,
    range?: [number, number],
    options?: string[],
    fields?: Question[],
    list?: Question[],
    revealed?: Question,
    rangeType?: string,
    toolTip?: string,
    validatorOptions?: string[]
}

export type Section = {
    title: string,
    questions: Question[]
}

export type DiscoveryQuestionnaire = {
    currentPage: number,
    sections: Section[]
};