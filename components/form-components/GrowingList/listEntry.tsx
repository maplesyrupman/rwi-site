import { useState } from 'react'

import Button from '../../Button'
import GLForm from './form'

import styles from '../styles.module.css'

type Props = {
    idx: number;
    fields: any;
    ent: any;
    handleEdit: (entry: any, idx: number | undefined, option: 'add' | 'edit' | 'delete') => void
}

export default function ListEntry({ idx, fields, ent, handleEdit }: Props) {
    const [editView, setEditView] = useState(false)

    function toggleEdit() {
        setEditView(!editView)
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
                {!editView && (
                    <div>
                        <Button type='button' btnStyle='secondary' text='edit' func={toggleEdit} />
                        <Button type='button' btnStyle='danger' text='delete' func={() => handleEdit(ent, idx, 'delete')} />
                    </div>
                )}
            </div>
            {editView && (
                <div id={`form${idx}`}
                    onResetCapture={() => toggleEdit()}
                >
                    <GLForm fields={fields} submit={handleEdit} initState={ent} idx={idx} id={`edit${idx}`} />
                </div>
            )}
        </div>
    )
}