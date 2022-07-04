import { useState } from 'react'

import Button from '../../Button'
import GLForm from './form'

import styles from '../styles.module.css'
import glStyles from './growingList.module.css'

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
        className={glStyles.entry}
        >
            <div id={`entry${idx}`}
                className={glStyles.listEntry}
            >
                {!editView && Object.keys(ent).map((f, idx) => {
                    return (
                        <div key={`f${idx}`}>
                            <span className={`txtBlue bold`}>{fields[idx].label}:</span><span className={glStyles.answer}>{ent[f]}</span>
                        </div>
                    )
                })}
            </div>
            {!editView && (
                    <div className={glStyles.btnCon}>
                        <Button type='button' btnStyle='primary' text='Edit' func={toggleEdit} />
                        <Button type='button' btnStyle='danger' text='Delete' func={() => handleEdit(ent, idx, 'delete')} />
                    </div>
                )}
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