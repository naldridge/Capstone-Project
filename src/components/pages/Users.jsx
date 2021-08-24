
import { useState, useEffect } from 'react';


const Users = (props) => {

    const [user, setUser] = useState([])

    useEffect(async () => {
        const getUser = `http://localhost:3333/user/${props.user_id}`;
        const response = await fetch(getUser).then(response => response.json()).catch(err => alert(err));
        
        setUser(response);

    }, [setUser]);


    return (
        <div className="UserContainer">
            {user.length > 0 ? (
                <ul>
                {user.map((entry) => (
                    <li>User: {entry.username}</li>
                ))}
                </ul>
            )
        :
        null}
        </div>
    )
}


export default Users;