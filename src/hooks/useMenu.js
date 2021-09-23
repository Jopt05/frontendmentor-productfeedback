import React, { useState } from 'react'

const useMenu = () => {

    const [ToggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(!ToggleMenu);
    }

    return [ ToggleMenu, handleToggleMenu ]
    
}

export default useMenu
