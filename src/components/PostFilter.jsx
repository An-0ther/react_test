import React from 'react'
import MyInput from './UI/input/myInput';
import MySelect from './UI/select/MySelect';

function PostFilter({filter, setFilter}) {
    return (
        <div>
            <MyInput
                onChange={e => setFilter({...filter, query: e.target.value})}
                value={filter.query}
                type="text"
                placeholder="Search"/>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value: 'title', name: 'By name'}, 
                    {value: 'body', name: 'By description'},
                ]}
                defaultValue="Сортировка по:"/>
        </div>
    )
}

export default PostFilter
