import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
/*
    const handleAdd = () =>{
        setCategories([...categories,'HunterXHunter']);//de esta manera se agrega al final
        //setCategories(['HunterXHunter',...categories]);//de esta manera se agraga al principio

        setCategories( cates => [...cates, 'HunterXHunter']);
    }
*/
    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories }/>

            <hr/>

            { 
                <ol>
                    {
                        categories.map( category =>( 
                            <GifGrid 
                                key = { category }
                                category = { category } 
                            />
                        ))
                    }
                </ol>
            }
        </>
    )
}
