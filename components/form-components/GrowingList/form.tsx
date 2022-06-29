import React, { useEffect, useState } from 'react'

import ShortAnswer from '../ShortAnswer'
import LongAnswer from '../LongAnswer'
import Button from '../../Button'

type Props = {
    fields: any[],
    initState?:any,
    idx?: number,
    id: string,
    submit: (entry: any, idx:number|undefined,  option: any) => void
}

export default function GLForm({fields, initState, submit, idx, id}: Props) {
    console.log(idx)
    const initialState: any = initState || {}
    // for(let i=0;i<fields.length;i++) {
    //     let field = fields[i]
    //     initialState[field.id] = field
    // }
    const [entry, editEntry] = useState(initialState)
    if (initState) {
        console.log(entry)
    }

    const formId: string = idx ? `edit${idx}` : 'mainForm'
    function resetForm(id: string) {
        console.log(id)
        const form = document.getElementById(id) as HTMLFormElement
        for (let i=0;i<form.children.length;i++) {
            if (form.children[i].querySelector('input')?.value) {
                form.children[i].querySelector('input').value = ''
            }
            console.log(form.children[i].querySelector('input')?.value)
        }
    }

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
        const form = e.target as HTMLFormElement
        form.onreset = () => console.log('reset')
        form.reset()
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
        id={formId}
        style={{"maxWidth":"500px"}}
        onSubmit={handleSubmit}
        >
            {fields.map((field, idx) => {
                const initialValue: string | undefined = entry[Object.keys(entry)[idx]] || undefined
                return (
                    <div key={idx}>
                        {(field.type === 'short' || field.type === 'email') && (
                            <ShortAnswer label={field.label} id={field.id} placeholder={field.label} initValue={initialValue} change={change} />
                        )}
                    </div>
                )
            })}
            <div style={{'display':'flex','justifyContent':'flex-end', 'padding':'1rem 0rem', 'gap':'0.5rem'}}>
                <Button type='submit' text='✓' btnStyle='primary' func={() => 'blah'} />
                <Button type='reset' text='X' btnStyle='danger' func={() => resetForm(formId)} />
            </div>
        </form>
    )
}