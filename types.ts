export type Question = {
    label: string,
    type: string,
    id: string,
    value: any,
    initValue?: any,
    placeholder?: string,
    required?: boolean,
    range?: [number, number],
    year?: boolean,
    month?: boolean,
    day?: boolean,
    options?: string[],    
    other?: boolean,
    size?: 'small' | 'medium' | 'large',
    multi?: boolean
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
    currentSection: number,
    sections: Section[]
};

export interface Date {
    year: string
    month: string
    day: string
}

export type FormQuestionProps = {
    question: Question
    change: (
        id: string,
        value: any
    ) => void;
    validate?: () => void;
}