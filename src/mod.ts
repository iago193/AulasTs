console.log('oi eu  sou  o  módulo');

type verifyUserFn = (user: User, sentValue: User)  =>  boolean;
type User    =  { userName:  string, password:  string };

const verifyUser:  verifyUserFn  = (user, sentValue) => {
    return (
        user.userName === sentValue.userName && user.password  ===  sentValue.password
    );
}

const bdUser = {userName:  'iago', password: '123456'};
const sentUser = {userName:  'iago', password: '123456'};

console.log(verifyUser(bdUser,sentUser));