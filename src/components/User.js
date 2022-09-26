function User(prop) {
    return (
        <span className="user">
            <span className="name">{prop.data.name}</span>
            <span className="handle">{"@" + prop.data.handle}</span>
        </span>
    );
}

export default User;