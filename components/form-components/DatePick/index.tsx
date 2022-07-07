import { useEffect, useState } from 'react'
import Picklist from '../Picklist'
import {FormQuestionProps, Question} from '../../../types'

function getPastYears(): string[] {
    const years: string[] = []
    let currentYear:any = new Date().getFullYear()
    console.log(currentYear)
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
    const {id, label, year, month, day} = question
    const [date, setDate] = useState({ year: '', month: '', day: '' })
    function updateDate(id: string, value: string) {
        switch (id) {
            case 'day':
                setDate({ ...date, day: value })
                break
            case 'month':
                setDate({ ...date, month: value })
                break
            case 'year':
                setDate({ ...date, year: value })
                break
        }
    }

    useEffect(() => {
        change(id, date)
    }, [date, change, id])

    const dayQuestion:Question = {
        id:'day',
        type:'picklist',
        label:'',
        placeholder:'dd',
        size:'small',
        options:getDays(),
        required:false,
        value:''
    }

    const monthQuestion:Question = {
        id:'month',
        type:'picklist',
        label:'',
        placeholder:'mm',
        size:'small',
        options:['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        required:false,
        value:''
    }

    const yearQuestion:Question = {
        id:'day',
        type:'picklist',
        label:'',
        placeholder:'yyyy',
        size:'small',
        options:getPastYears(),
        required:false,
        value:''
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