const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passwordFormat = /^(?=.*\d)(?=.*[a-zA-Z]).{8,14}$/;

export const LoginValidChecker = (userInput) => {
    const { email, password } = userInput ; 

    const error = {};
    let isError = false ;

    if (!email.match(mailFormat)) {
        error.email = "Enter valid email";
        isError = true ;
    }
    if (!password) {
        error.password = " Enter valid password"
        isError = true ;
    }
    
    error.isError = isError;

    return error ; 
};

export const SignupValidChecker = (useInput) => {
    const { name, email, password, confirmPassword} = useInput ;

    const error = { };
    let isError = false ;

    if (!name) {
        error.name = "Enter valid name";
        isError = true ; 
    }
    
    
    if (!email.match(mailFormat)) {
        error.email = "Enter valid email";
        isError = true ; 
    }
    
    if (!password) {
        error.password = "Enter valid password";
        isError = true ; 
    }
    
    if (password && !password.match(passwordFormat)) {
        error.password = "Weak password ! Should contain one charactor one digit and length between 8 and 14";
        isError = true ; 
    }
    
    if (!confirmPassword) {
        error.confirmPassword = "Enter confirm password";
        isError = true ; 
    }
    
    if (confirmPassword && password !== confirmPassword) {
        error.confirmPassword = "password didn't match";
        isError = true ; 
    }

    error.isError = isError;

    return error
};