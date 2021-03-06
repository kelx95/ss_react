import React from 'react';

export function UserList(props) {

    return (
        <div>
            {props.users.length > 1 ?
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.map((user, i) => 
                                <tr key={i}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                : null
            }
        </div>
    )
}
