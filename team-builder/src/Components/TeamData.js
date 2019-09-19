import React from 'react';

const TeamData = props => {
    return(
        <div>
            {props.teamData.map(member => {
                return(
                    <div key={member.id}>

                        <br/>
                        <h2>{member.name}</h2>
                        <h3>{member.role}</h3>
                        <p>{member.email}</p>

                        <br/>
                        <hr/>

                    </div>
                )
            })}
        </div>
    )
};

export default TeamData;