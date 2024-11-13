import React, {useContext} from 'react';
import { user } from '../../../App';

import { customCOntext, customCOntextTow } from './classE';

const ClassG = () => {
    const userdetail = useContext(user);
    const customOne = useContext(customCOntext);
    const customTow = useContext(customCOntextTow)
    return(
        <>
        <div>hello {userdetail} </div>
        <div>
            {customOne} <br></br> {customTow}
        </div>
        </>
    )
}
export default ClassG;