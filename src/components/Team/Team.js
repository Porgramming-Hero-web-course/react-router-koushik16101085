import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Team = (props) => {
    const { strTeam, strTeamBadge, idTeam } = props.team;

    let history = useHistory();
    const showComments = idTeam => {
        const url = `team/${idTeam}`;
        history.push(url);
    }

    return (
        <div className="text-center d-inline-flex">
            <div className='teamStyle mx-4 shadow-lg p-2 mb-3 bg-body rounded'>
                <img src={strTeamBadge} alt="" />
                <h2>Team: {strTeam} </h2>
                <p>Sport Type: Football</p>
                <Button style={{ textTransform: 'none' }}
                    onClick={() => showComments(idTeam)}
                    variant="contained" color="primary">Explore<FontAwesomeIcon icon={faAngleDoubleRight} />
                </Button>
            </div>
        </div>
    );
};

export default Team;




