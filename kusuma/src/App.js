import React, {useState} from 'react';
import './App.css';

export default function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  function handle() {
    if(user === '') {
      alert('enter the username');
    } else if( password.length <= 6 ) {
      alert('enter the valid password');
    } else {
      alert('succesfully register');
    }
  }

  function submitHandle(e) {
    e.preventDefault();
    console.log(`username : ${user}`);
    console.log(`password : ${password}`);
    setPassword('');
      setUser('');     
  }


  return <>

    <section className='main-box'>
      <form onSubmit={submitHandle} className='form'>
      <div className="in-box">
        <label htmlFor="sign"> sign in</label>
        <input type="text" name='sign' placeholder='Username' value={user} onChange={ (e) => setUser(e.target.name)}/>
      </div>
      <div className="password">
        <label htmlFor="password">password</label>
        <input type="password" name='password' placeholder='password' value={password} onChange = { e => setPassword(e.target.value) }/>
      </div>
      <div className="forgot">
        <a href="https://saitadikonda.bio.link">forgot password?</a>
      <Button handle = {handle} type="submit" />
      </div>
      </form>
    </section>
  </>
}

function Button({handle}) {
  return (
    <button className='submit' onClick={handle}>submit</button>
  );
}

