import { useEffect, useState } from 'react'
import GLForm from './form'
import styles from '../styles.module.css'
import Button from '../../Button'
import ListEntry from './listEntry'

type Props = {
    id: string,
    label: string,
    fields: any[],
    change: (id: string, value: any[]) => void,
    validate: () => boolean
}

export default function GrowingList({ id, label, fields, change, validate }: Props) {
    const [list, mutateList] = useState<any>([])
    const [displayForm, setFormDisplay] = useState(false)

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
                mutateList((state: any) => [...state, entry]);
                break
            case 'delete':
                const newState = [...list]
                newState.splice(idx, 1)
                mutateList(newState)
                break
            case 'edit':
                mutateList((state: any) => {
                    const newState = [...state]
                    newState.splice(idx, 1, entry)
                    return newState
                })
                break;
        }
    }

    useEffect(() => {

    }, [list])

    const formStateTemplate: any = {}
    fields.forEach(field => {
        formStateTemplate[field.id] = ''
    })

    return (
        <div style={{'maxWidth':'500px'}}>
            <div style={{'display':'flex','flexDirection':'column', 'gap':'1rem'}}>
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
                <div style={{'maxWidth':'fit-content','margin':'1rem 0 0 0'}}>
                    <Button text='+' func={() => showForm()} type='button' btnStyle='secondary' />
                </div>
            )}
        </div>
    )
}