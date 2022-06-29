import { useEffect, useState } from 'react'
import GLForm from './form'
import styles from '../styles.module.css'
import Button from '../../Button'

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

    function toggleForm() {
        setFormDisplay(!displayForm)
    }

    function handleEntry(entry: any, idx: number | undefined, option: 'add' | 'edit' | 'delete') {
        if (displayForm) {
            toggleForm()
        }
        switch (option) {
            case 'add':
                mutateList(state => [...state, entry]);
                break
            case 'delete':
                const newState = [...list]
                newState.splice(idx, 1)
                mutateList(newState)
                break
            case 'edit':
                mutateList(state => {
                    const newState = [...state]
                    newState.splice(idx, 1, entry)
                    return newState
                })
                console.log('editing!!!!!!!!!!!!')
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
        <div>
            <div>
                {list.map((ent: any, idx: number) => {
                    function toggleEdit() {
                        const formContainer: HTMLElement | null = document.getElementById(`form${idx}`)
                        formContainer?.classList.contains(styles.hidden) ?
                            formContainer.classList.remove(styles.hidden) :
                            formContainer?.classList.add(styles.hidden)

                        const entryContainer: HTMLElement | null = document.getElementById(`entry${idx}`)
                        entryContainer?.classList.contains(styles.hidden) ?
                            entryContainer.classList.remove(styles.hidden) :
                            entryContainer?.classList.add(styles.hidden)
                    }
                    return (
                        <div key={idx}
                        >
                            <div id={`entry${idx}`}
                                style={{ 'display': 'flex', 'flexWrap': 'wrap', 'padding': '1rem 1.5rem', 'justifyContent': 'space-evenly' }}>
                                {Object.keys(ent).map((f, idx) => {
                                    return (
                                        <div key={`f${idx}`}>
                                            <span className={`txtBlue bold`}>{fields[idx].label}:</span><span>{ent[f]}</span>
                                        </div>
                                    )
                                })}
                                <div>
                                    <Button type='button' btnStyle='secondary' text='edit' func={toggleEdit} />
                                    <Button type='button' btnStyle='danger' text='delete' func={() => handleEntry(ent, idx, 'delete')} />
                                </div>
                            </div>
                            <div id={`form${idx}`}
                                className={styles.hidden}
                                onResetCapture={() => toggleEdit()}
                            >
                                <GLForm fields={fields} submit={handleEntry} initState={ent} idx={idx} id={`edit${idx}`} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={`${displayForm ? null : styles.hidden}`}
                onReset={() => toggleForm()}
            >
                <GLForm fields={fields} submit={handleEntry} id='mainForm' initState={formStateTemplate} />
            </div>
            <div className={`${displayForm ? styles.hidden : null}`}>
                <Button text='+' func={() => toggleForm()} type='button' btnStyle='secondary' />
            </div>
        </div>
    )
}