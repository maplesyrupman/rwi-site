import { useEffect, useMemo, useState } from 'react'
import Picklist from '../Picklist'
import {FormQuestionProps, Question} from '../../../types'

function getPastYears(): string[] {
    const years: string[] = []
    let currentYear:any = new Date().getFullYear()
    for (let i = 1900; i <= currentYear; i++) {
        years.unshift(i + '')
    }
    return years
}

function getDays(): string[] {
    let days: string[] = []
    for (let i=1; i<=31;i++) {
        days.unshift(i + '')
    }
    return days
}

export default function DatePick({ question, change, validate }: FormQuestionProps) {
    const {id, label, year, month, day, value} = question
    const {day:vDay,month:vMonth,year:vYear} = value
    
    const [date, setDate] = useState(value)

    function updateDate(unit: string, value: string) {
        let newDate:{year:string, month:string, day:string}
        switch (unit) {
            case 'day':
                newDate = { ...date, day: value }
                setDate(newDate)
                change(id, newDate)
                break
            case 'month':
                newDate = { ...date, month: value }
                setDate(newDate)
                change(id, newDate)
                break
            case 'year':
                newDate = { ...date, year: value }
                setDate(newDate)
                change(id, newDate)
                break
        }
    }

    const dayQuestion:Question = {
        id:'day',
        type:'picklist',
        label:'',
        placeholder:'dd',
        size:'small',
        options:getDays(),
        required:false,
        value:vDay
    }

    const monthQuestion:Question = {
        id:'month',
        type:'picklist',
        label:'',
        placeholder:'mm',
        size:'small',
        options:['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        required:false,
        value:vMonth
    }

    const yearQuestion:Question = {
        id:'year',
        type:'picklist',
        label:'',
        placeholder:'yyyy',
        size:'small',
        options:getPastYears(),
        required:false,
        value:vYear
    }

    return (
        <div>
            <div className='txtBlue bold'>
                {label}
            </div>
            <div style={{ "display": 'flex', 'gap': '0.5rem' }}>
                {day && (
                    <Picklist question={dayQuestion} change={updateDate}  />
                )}
                {month && (
                    <Picklist question={monthQuestion} change={updateDate}  />
                )}
                {year && (
                    <Picklist question={yearQuestion} change={updateDate}  />
                )}
            </div>
        </div>
    )
}