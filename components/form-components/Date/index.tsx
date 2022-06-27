import { useEffect, useState } from 'react'
import Picklist from '../Picklist'

type Props = {
    id: string,
    year?: boolean,
    month?: boolean,
    day?: boolean,
    change: (id: string, value: any) => void
}

function getPastYears(): string[] {
    const years: string[] = []
    for (let i = 1900; i <= new Date().getFullYear(); i++) {
        years.push(i + '')
    }
    return years
}

export default function DatePick({ id, year, month, day, change }: Props) {
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
            {day && (
                <Picklist label='' id={'day'} placeholder='dd' size='small' options={[...Array(31).keys()]} change={updateDate} />

            )}
            {month && (
                <Picklist label='' id={'month'} placeholder='mm' size='small' options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']} change={updateDate} />

            )}
            {year && (
                <Picklist label='' id={'year'} placeholder='yyyy' size='small' options={getPastYears()} change={updateDate} />
            )}
            <div onClick={() => console.log(date)}>
                button
            </div>
        </div>
    )
}