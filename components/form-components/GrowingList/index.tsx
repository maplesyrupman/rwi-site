import { useState } from 'react'
import GLForm from './form'
import stylesMain from '../styles.module.css'
import styles from './growingList.module.css'
import Button from '../../Button'
import ListEntry from './listEntry'
import ToolTip from '../../ToolTip'
import { FormQuestionProps } from '../../../types'

export default function GrowingList({question, change, validate}: FormQuestionProps) {
    const { id, label, fields, required, toolTip } = question
    const [list, mutateList] = useState<any>([])
    const [displayForm, setFormDisplay] = useState(false)

    if (!fields) {
        throw new Error('fields prop is required for growing-list question type')
    }

    function showForm() {
        setFormDisplay(true)
    }

    function hideForm() {
        setFormDisplay(false)
    }

    function handleEntry(entry: any, idx: number | undefined, option: 'add' | 'edit' | 'delete') {
        hideForm()
        switch (option) {
            case 'add':
                mutateList((state: any) => {
                    const newState = [...state, entry]
                    change(id, newState)
                    return newState
                });
                break
            case 'delete':
                const newState = [...list]
                idx !== undefined && newState.splice(idx, 1)
                change(id, newState)
                mutateList(newState)
                break
            case 'edit':
                if(idx === undefined) return

                mutateList((state: any) => {
                    const newState = [...state]
                    newState.splice(idx, 1, entry)
                    change(id, newState)
                    return newState
                })
        }
    }

    const formStateTemplate: any = {}
    fields.forEach(field => {
        formStateTemplate[field.id] = ''
    })

    return (
        <div>
            <div className={stylesMain.labelCon}>
                <span className='txtBlue bold'>
                    {label}
                    {required && (
                        <span className='txtRed bold'>*</span>
                    )}
                </span>
                {toolTip && (
                    <ToolTip text={toolTip} />
                )}
            </div>
            <div className={styles.entryCon}>
                {list.map((ent: any, idx: number) => {
                    return (
                        <ListEntry key={`$editForm${idx}`} ent={list[idx]} idx={idx} fields={fields} handleEdit={handleEntry} />
                    )
                })}
            </div>
            {displayForm ? (
                <div onReset={() => hideForm()}
                onSubmit={() => hideForm()}
                >
                    <GLForm fields={fields} submit={handleEntry} id='mainForm' initState={formStateTemplate} />
                </div>
            ) : (
                <div>
                    <Button text='New Entry' func={() => showForm()} type='button' btnStyle='secondary' />
                </div>
            )}
        </div>
    )
}