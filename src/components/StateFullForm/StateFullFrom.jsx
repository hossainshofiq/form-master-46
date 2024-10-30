import { useState } from 'react';

const StateFullFrom = () => {
    const [name, setName] = useState('Shofiq');
    const [email, setEmail] =useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 characters or longer');
        }
        else{
            setError('');
        }
        console.log(name, email, password);

        // console.log(e.target.name.value);
        // console.log(e.target.email.value);
        // console.log(e.target.password.value);
    }
    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleNameChange}
                type="text" name="name" value={name} />
                <br />
                <input 
                    onChange={handleEmailChange}
                type="email" name="email" />
                <br />
                <input
                    onChange={handlePasswordChange}
                type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullFrom;