import React from 'react';
import { useState } from 'react';
import styles from '../styles/index.module.scss';
import jwt from 'jsonwebtoken';

export default function Home() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('You are not loged in');
  const [secretMessage, setSecretMessage] = useState<string>(
    'You are not loged in'
  );

  async function submitForm(e) {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json());
    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };

      setMessage(
        `Welcome ${json.username} and you are ${
          json.admin ? 'an admin' : 'not an admin'
        }`
      );
      console.log(JSON.stringify(token), 'It is token');
      const res = await fetch('/api/secret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      }).then((t) => t.json());

      console.log(res, 'In res console');

      if (res.secretAdminCode) {
        setSecretMessage(res.secretAdminCode);
      } else {
        setSecretMessage('Nothing available');
      }
    } else {
      setMessage('Something went wrong');
    }
  }

  return (
    <React.Fragment>
      <div className={styles.coolClass}>
        <div className={styles.myFormDiv}>
          <h1>{message}</h1>
          <h2>Secret: {secretMessage}</h2>
          <form onSubmit={submitForm}>
            <input
              className={styles.myInput}
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              onClick={submitForm}
              className={styles.myInput}
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input className={styles.myInput} type="submit" value="login" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
