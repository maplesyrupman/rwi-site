import React, { useEffect, useState } from 'react'

import ShortAnswer from '../ShortAnswer'
import LongAnswer from '../LongAnswer'
import Button from '../../Button'
import { EventEmitter } from 'stream'

type Props = {
    fields: any[],
    initState?: any,
    idx?: number,
    id: string,
    submit: (entry: any, idx: number | undefined, option: any) => void
}

export default function GLForm({ fields, initState, submit, idx, id }: Props) {

    const formStateTemplate: any = {}
    fields.forEach(field => {
        formStateTemplate[field.id] = ''
    })

    const [entry, editEntry] = useState(initState)

    function resetForm(id: string) {
        editEntry(initState)
    }

    function change(id: string, value: any) {
        editEntry(state => {
            return {
                ...state,
                [id]: value
            }
        })
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const reset = new Event('reset')
        form.dispatchEvent(reset)
        if (typeof idx == 'number') {
            submit(entry, idx, 'edit')
        } else {
            submit(entry, undefined, 'add')
        }
        resetForm(id)
    }

    return (
        <form
            id={id}
            style={{ "maxWidth": "500px" }}
            onSubmit={handleSubmit}
        >
            {fields.map((field, idx) => {
                const initialValue: string = entry[Object.keys(entry)[idx]] || ''
                return (
                    <div key={idx}>
                        {(field.type === 'short' || field.type === 'email') && (
                            <ShortAnswer label={field.label} id={field.id} placeholder={field.label} initValue={initialValue} change={change} />
                        )}
                    </div>
                )
            })}
            <div style={{ 'display': 'flex', 'justifyContent': 'flex-end', 'padding': '1rem 0rem', 'gap': '0.5rem' }}>
                <Button type='submit' text='✓' btnStyle='primary' func={() => console.log(idx)} />
                <Button type='reset' text='X' btnStyle='danger' func={() => resetForm(id)} />
            </div>
        </form>
    )
}