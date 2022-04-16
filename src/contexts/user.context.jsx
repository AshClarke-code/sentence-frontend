import {createContext, useState} from 'react';


const nullFunction = () => null;


export const UserContext = createContext({
    currentUser: null,
    loginData: null,
    signUpData: null,
    getCurrentUser: nullFunction,
    signUp: nullFunction,
    login: nullFunction,
    handleLoginChange: nullFunction,
    handleSignUpChange: nullFunction,
    logout: nullFunction
    
});


export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const handleLoginChange = event => setLoginData(prevState => ({...prevState, [event.target.name] : event.target.value}));
    const handleSignUpChange = event => setSignUpData(prevState => ({...prevState, [event.target.name] : event.target.value}));

    const login = async (event) => {
        try{
            event.preventDefault();
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginData),
            }
            const response = await fetch(`http://localhost:8000/api/v1/users/login`, requestOptions);
            if(!response.ok){
                const error = response.json();
                console.log(error.message);
                return;
            }
            const data = await response.json();
            setCurrentUser(data.data.user);


        } catch(err){
            console.log(err);
        }
    };

    const signUp = async (event) => {
        try{
            event.preventDefault();
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(signUpData),
            }
            const response = await fetch(`http://localhost:8000/api/v1/users/signup`, requestOptions);
            if(!response.ok){
                const error = response.json();
                console.log(error.message);
                return;
            }
            const data = await response.json();
            setCurrentUser(data.data.user);


        } catch(err){
            console.log(err);
        }
    };

    const getCurrentUser = async () => {
        try{
            const response = await fetch(`http://localhost:8000/api/v1/users/is-logged-in`, {credentials: "include"});
            if(!response.ok){
                const error = response.json();
                console.log(error.message);
                return;
            }
            
            const data = await response.json();
            setCurrentUser(data.user);


        } catch(err){
            console.log(err);
        }
    };

    const logout = async () => {
        try{
            const response = await fetch(`http://localhost:8000/api/v1/users/logout`, {credentials: "include"});
            if(!response.ok){
                const error = response.json();
                console.log(error.message);
                return;
            }
            setCurrentUser(null);


        } catch(err){
            console.log(err);
        }
    };


    const values = {
        currentUser,
        loginData,
        signUpData,
        getCurrentUser,
        signUp,
        login,
        handleLoginChange,
        handleSignUpChange,
        logout
    };

    return (<UserContext.Provider value={values}>{children}</UserContext.Provider>);
}