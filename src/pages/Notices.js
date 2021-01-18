import React from 'react';
import NoticeBorad from '../components/NoticeBorad';
import ProgrammeBar from '../components/ProgrammeBar';

function Notices() {
    return (
        <React.Fragment>
            <NoticeBorad />
            <ProgrammeBar route='notices' />
        </React.Fragment>
    )
}

export default Notices;
