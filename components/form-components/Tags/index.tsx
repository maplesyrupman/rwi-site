import Tag from '../../Tag';
import ShortAnswer from '../ShortAnswer';
import stylesMain from '../styles.module.css'
import styles from './styles.module.css'

import React, { useEffect, useState } from 'react'

import { FormQuestionProps } from '../../../types'

export default function Tags({ question, change, validate }:FormQuestionProps) {
    const {id, label, placeholder, required, toolTip, value} = question

    const [tags, setTags] = useState<string[]>(value);
    const [newTag, updateNewTag] = useState<string>('')

    function changeInput(id:string, value:any) {
        updateNewTag(value)
    }


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const input = (form[1] as HTMLInputElement)
        addTag(input.value)
        input.value = '';
    }

    function addTag(value:string) {
        setTags((state: string[]) => [...state, value])
    }

    function deleteTag(idx: number) {
        const newArr = [...tags];
        newArr.splice(idx, 1);

        setTags(newArr);
    }

    useEffect(() => {
        change(id, tags);
    }, [tags, change, id])

    return (
        <div className={stylesMain.container}>
            <form onSubmit={handleSubmit}>
                <ShortAnswer question={{...question, value:newTag}} change={changeInput} />
            </form>
            <div className={styles.tagCon}>
                {tags.map((t, idx) => {
                    return (
                        <Tag key={t} text={t} colour='blue' canDelete={true} onClick={() => deleteTag(idx)} />
                    )
                })}
            </div>
        </div>
    )
}