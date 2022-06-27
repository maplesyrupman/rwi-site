import React, { useEffect, useState } from 'react'

import ShortAnswer from '../ShortAnswer'
import LongAnswer from '../LongAnswer'

type Props = {
    fields: any[],
    initState?:any,
    submit: (idx:number,  value: any) => void
}

export default function GLForm({fields, initState, submit}: Props) {
    const initialState: any = initState || {}
    for(let i=0;i<fields.length;i++) {
        let field = fields[i]
        initialState[field.id] = field
    }
    const [entry, editEntry] = useState(initialState)

    function change(id: string, value: any) {
        editEntry(state => {
            return {
                ...state,
                [id]:value
            }
        })
    }

    useEffect(() => {
        console.log(entry)
    }, [entry])

    return (
        <div>
            {fields.map((field, idx) => {

                return (
                    <div key={idx}>
                        {(field.type === 'short' || field.type === 'email') && (
                            <ShortAnswer label={field.label} id={field.id} placeholder={field.label} change={change} />
                        )}
                    </div>
                )

            })}
        </div>
    )
}