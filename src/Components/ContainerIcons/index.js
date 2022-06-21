import React from "react";
import { Link } from 'react-router-dom';

import { Icons } from './styles';

import { BiAlarmExclamation } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { CgSandClock } from 'react-icons/cg';
import { IconContext } from 'react-icons/lib';


function ContainerIcons() {
    return(
        <Icons>
            <IconContext.Provider value={{ className: "icons-clock" }} >
                <Link to="/stopwatch"><BiAlarmExclamation /></Link>
                <Link to="/"><AiOutlineClockCircle /></Link>
                <Link to="/choosetimer"><CgSandClock /></Link>
            </IconContext.Provider>
        </Icons>
    )
}

export default ContainerIcons;