import React, { useContext } from 'react';

import Theme from '../Context'

export const SubTitle = () => {
    let {mode} = useContext(Theme)
    return <h2 className={`${mode} Subtitle`}>Overview - Today</h2>
}