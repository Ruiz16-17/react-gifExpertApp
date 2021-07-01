import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const AddCategory = ( { setCategories } ) => {
    
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( inputValue.trim().length > 0 ){

            setCategories( cates => [inputValue, ...cates ]);
            setinputValue('');
        }

        
    }

    return (
        
        <form onSubmit = { handleSubmit } >
            <input
                type="text"
                value={ inputValue }
                onChange= { handleInputChange }
            />
        </form>
        
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}