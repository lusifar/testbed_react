import './User.css';

function User(props) {
  const { name, email } = props.user;

  return (
    <div className="User">
      <h3>{name}</h3>
      <span>{email}</span>
    </div>
  );
}

export default User;
