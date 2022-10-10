import { useState, useEffect } from 'react';

import Input from '../components/input';
import Checkbox from '../components/checkBox';
import Button from '../components/button';

const Form = ({ isTelentForm }) => {
    const [first_name, setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isCheck, setIsCheck] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { first_name, last_name, username, email, password };
        let URL = 'http://wren.in:3200/api/sign-up/';
        isTelentForm ? URL += 'talent' : URL += 'fan';
        try {
            const res = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setUsername('');
            setIsCheck(false)
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setUsername('');
        setIsCheck(false);
        setError('');
    }, [isTelentForm]);

    return (
        <div>
            <div>
                <h1>Create Your {isTelentForm ? 'Talent' : 'Fan'} Account</h1>
            </div>
            {
                error ? (
                    <div>
                        <h2>{error}</h2>
                    </div>
                ) : ''
            }
            <form onSubmit={handleSubmit}>
                <Input
                    id="inputFirstname"
                    label="First Name *"
                    value={first_name}
                    onChange={setFirstname}
                    placeholder="First Name"
                    type="text"
                    isRequired={true}
                />
                <Input
                    id="inputLastname"
                    label="Last Name *"
                    value={last_name}
                    onChange={setLastname}
                    placeholder="Last Name"
                    type="text"
                    isRequired={true}
                />
                <Input
                    id="inputUsername"
                    label="User Name *"
                    value={username}
                    onChange={setUsername}
                    placeholder="User Name"
                    type="text"
                    isRequired={true}
                />
                <Input
                    id="inputEmail"
                    label="Email *"
                    value={email}
                    onChange={setEmail}
                    placeholder="Email"
                    type="email"
                    isRequired={true}
                />
                <Input
                    id="inputPassword"
                    label="Password *"
                    value={password}
                    onChange={setPassword}
                    placeholder="Password"
                    type="password"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    isRequired={true} />
                <Checkbox value={isCheck} onChange={setIsCheck} isRequired={true} />
                <Button disabled={!isCheck} label="SIGN UP" />
            </form>
        </div>
    );
};

export default Form;
