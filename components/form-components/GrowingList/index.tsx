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

    function handleEntry(entry: any, idx: number | undefined, option: 'add' | 'edit' | 'delete') {
        switch (option) {
            case 'add':
                mutateList(state => [...state, entry]);
                break
            case 'delete':
                mutateList(state => [...state].splice(idx))
                break
            case 'edit':
                mutateList(state => [...[...state].splice(idx, 1, entry)])
                break;
        }
    }

    useEffect(() => {
        console.log(list)
    }, [list])

    return (
        <div>
            <div>
                {list.map((ent: any, idx: number) => {
                    return (
                        <div key={idx}
                            style={{ 'display': 'flex', 'flexWrap': 'wrap', 'padding': '1rem 1.5rem', 'justifyContent': 'space-evenly' }}
                        >
                            {Object.keys(ent).map((f, idx) => {

                                return (
                                    <div key={`f${idx}`}>
                                        <span className={`txtBlue bold`}>{fields[idx].label}:</span><span>{ent[f]}</span>
                                    </div>
                                )
                            })}
                            <div>
                                <Button type='button' btnStyle='secondary' text='edit' func={() => null} />
                                <Button type='button' btnStyle='danger' text='delete' func={() => handleEntry(ent, idx, 'delete')} />
                            </div>
                            <div className={styles.hidden}>
                                <GLForm fields={fields} submit={handleEntry} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <GLForm fields={fields} submit={handleEntry} />
            </div>
        </div>
    )
}