import React from 'react'
import { useTranslation } from 'react-i18next';
import MyInput from './UI/input/myInput';
import MySelect from './UI/select/MySelect';

function PostFilter({filter, setFilter}) {
    const { t } = useTranslation()
    return (
        <div>
            <MyInput
                onChange={e => setFilter({...filter, query: e.target.value})}
                value={filter.query}
                type="text"
                placeholder={ t("search") }/>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value: 'title', name: 'By name'}, 
                    {value: 'body', name: 'By description'},
                ]}
                defaultValue={ t("sort_by") }/>
        </div>
    )
}

export default PostFilter
