import { useEffect, useState } from 'react'
import Picklist from '../Picklist'
import {Date} from '../../../types'
import {FormQuestionProps} from '../../../types'

function getPastYears(): string[] {
    const years: string[] = []
    for (let i = 1900; i <= new Date().getFullYear(); i++) {
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

    return (
        <div>
            <div className='txtBlue bold'>
                {label}
            </div>
            <div style={{ "display": 'flex', 'gap': '0.5rem' }}>
                {day && (
                    <Picklist label='' id={'day'} placeholder='dd' size='small' options={getDays()} change={updateDate} required={false} />
                )}
                {month && (
                    <Picklist label='' id={'month'} placeholder='mm' size='small' options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']} change={updateDate} required={false} />
                )}
                {year && (
                    <Picklist label='' id={'year'} placeholder='yyyy' size='small' options={getPastYears()} change={updateDate} required={false} />
                )}
            </div>
        </div>
    )
}