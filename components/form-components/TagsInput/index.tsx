import Tag from '../../Tag';
import ShortAnswer from '../ShortAnswer';
import stylesMain from '../styles.module.css'
import styles from './styles.module.css'

import React, { useEffect, useState } from 'react';

type Props = {
    id: string,
    label: string,
    placeholder: string,
    change: (id: string, value: any) => void;
    required: boolean,
    toolTip?: string
}

export default function TagsInput({ id, label, placeholder, change, required, toolTip }:Props) {

    const [tags, setTags] = useState<string[]>([]);


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const input = form[0] as HTMLInputElement;

        const value = input.value;
        
        setTags([ ...tags, value]);
        form.reset()
    }

    function handleDelete(idx: number) {
        const newArr = [...tags];
        const deleted = newArr.splice(idx, 1);

        setTags(newArr);
        console.log(tags);
    }

    useEffect(() => {
        change(id, tags);
    }, [tags, change, id])

    return (
        <div className={stylesMain.container}>
            <form onSubmit={handleSubmit}>
                <ShortAnswer id={id} label={label} placeholder={placeholder} required={required} toolTip={toolTip} />
            </form>
            <div className={styles.tagCon}>
                {tags.map((t, idx) => {
                    return (
                        <Tag key={t} text={t} colour='blue' canDelete={true} onClick={() => handleDelete(idx)} />
                    )
                })}
            </div>
        </div>
    )
}