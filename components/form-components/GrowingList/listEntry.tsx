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
        style={{'display':'flex', 'flexDirection':'column', 'padding':'1rem', 'gap':'1rem', 'border':'3px solid #03053E', 'borderRadius':'10px'}}
        >
            <div id={`entry${idx}`}
                className={glStyles.listEntry}
            >
                {!editView && Object.keys(ent).map((f, idx) => {
                    return (
                        <div key={`f${idx}`}>
                            <span className={`txtBlue bold`}>{fields[idx].label}:</span><span>{ent[f]}</span>
                        </div>
                    )
                })}
            </div>
            {!editView && (
                    <div style={{'display':'flex', 'gap':'0.5rem','maxWidth':'fit-content'}}>
                        <Button type='button' btnStyle='secondary' text='edit' func={toggleEdit} />
                        <Button type='button' btnStyle='danger' text='delete' func={() => handleEdit(ent, idx, 'delete')} />
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