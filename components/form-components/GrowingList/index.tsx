import {useState} from 'react'
import GLForm from './form'

type Props = {
    id: string, 
    label: string, 
    fields: any[], 
    change: (id:string, value:any[]) => void,
    validate: () => boolean
}

export default function GrowingList({id, label, fields, change, validate}: Props) {
    const [list, mutateList] = useState<any[]>([])

    function handleEntry(entry:any, idx:number | undefined, option: string) {
        
    }


    return (
        <div>
            <GLForm fields={fields} submit={handleEntry} />
        </div>
    )

}