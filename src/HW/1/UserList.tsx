type AddressType = {
    street: string, // ПОДПРАВЛЯЕМ any
    city: string, // ПОДПРАВЛЯЕМ any
};

type UserType = {
    id: number,
    name: string,
    age: number,
    address: AddressType,
};

type UserListPropsType = {
    users: UserType [],
};

export const UserList = (props: UserListPropsType) => {

    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>
            <ul style={{listStyleType: 'none'}}>
                {props.users.map((el ) => (
                    <li key={el.id} id={`hw01-user-${el.id}`}>
                        <strong>{el.name} </strong>
                        (Age: {el.age})
                        <strong> Address: </strong>
                        {el.address.street}, {el.address.city}
                    </li>
                ))}
            </ul>
        </div>
    );
};
