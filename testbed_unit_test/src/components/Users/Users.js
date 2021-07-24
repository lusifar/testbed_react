import { useState, useEffect } from 'react';
import axios from 'axios';

import './Users.css';

import User from './User/User';

function Users() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const getUser = async () => {
    try {
      const {
        data: { user },
      } = await axios.get('https://jsonplaceholder.typicode.com/users/1');

      setUser(user);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (error) {
    return <span>{error}</span>;
  }

  return <div>{user ? <User user={user} /> : <span>Loading...</span>}</div>;
}

export default Users;
