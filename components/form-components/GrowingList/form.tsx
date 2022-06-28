import React, { useEffect, useState } from 'react'

import ShortAnswer from '../ShortAnswer'
import LongAnswer from '../LongAnswer'
import Button from '../../Button'

type Props = {
    fields: any[],
    initState?:any,
    idx?: number,
    submit: (entry: any, idx:number|undefined,  option: any) => void
}

export default function GLForm({fields, initState, submit, idx}: Props) {
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

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!initState) {
            submit(entry, undefined, 'add')
        } else {
            submit(entry, idx, 'edit')
        }
    }

    // useEffect(() => {
    //     console.log(entry)
    // }, [entry])

    return (
        <form
        style={{"maxWidth":"500px"}}
        onSubmit={handleSubmit}
        >
            {fields.map((field, idx) => {

                return (
                    <div key={idx}>
                        {(field.type === 'short' || field.type === 'email') && (
                            <ShortAnswer label={field.label} id={field.id} placeholder={field.label} change={change} />
                        )}
                    </div>
                )

            })}
            <div style={{'display':'flex','justifyContent':'flex-end', 'padding':'1rem 0rem', 'gap':'0.5rem'}}>
                <Button type='submit' text='✓' btnStyle='primary' func={() => 'blah'} />
                <Button type='reset' text='X' btnStyle='danger' func={() => 'blah'} />
            </div>
        </form>
    )
}