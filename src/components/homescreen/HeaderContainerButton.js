import React, { useContext } from 'react'
import { AppContext } from '../../hoc/Context'

const HeaderContainerButton = (props) => {    

    const { Filter, handleChangeFilter } = useContext(AppContext);

    return (
        <button className={ `Header__Container-Button ${ Filter === props?.title ? 'ButtonActive' : '' }` } onClick={ handleChangeFilter }>
            { props?.title }
        </button>
    )
}

export default HeaderContainerButton
