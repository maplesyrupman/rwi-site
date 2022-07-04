import React, { useEffect, useState } from 'react'

import ShortAnswer from '../ShortAnswer'
import LongAnswer from '../LongAnswer'
import Button from '../../Button'
import { EventEmitter } from 'stream'
import styles from './growingList.module.css';

type Props = {
    fields: any[],
    initState?: any,
    idx?: number,
    id: string,
    submit: (entry: any, idx: number | undefined, option: any) => void
}

export default function GLForm({ fields, initState, submit, idx, id,  }: Props) {

    const formStateTemplate: any = {}
    fields.forEach(field => {
        formStateTemplate[field.id] = ''
    })

    const [entry, editEntry] = useState(initState)

    function resetForm(id: string) {
        editEntry(initState)
    }

    function change(id: string, value: any) {
        editEntry((state: any) => {
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
            className={styles.mainForm}
            onSubmit={handleSubmit}
        >
            {fields.map((field, idx) => {
                const initialValue: string = entry[Object.keys(entry)[idx]] || ''
                return (
                    <div key={idx}>
                        {(field.type === 'short' || field.type === 'email') && (
                            <ShortAnswer label={field.label} id={field.id} placeholder={field.label} initValue={initialValue} change={change} required={field.required} />
                        )}
                    </div>
                )
            })}
            <div className={styles.btnCon}>
                <Button type='submit' text='Submit' btnStyle='primary' func={() => console.log(idx)} />
                <Button type='reset' text='Cancel' btnStyle='danger' func={() => resetForm(id)} />
            </div>
        </form>
    )
}