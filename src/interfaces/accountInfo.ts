export interface ISignUp {
    name: string;
    email: string;
    password: string;
} 

export interface ISignIn extends Omit<ISignUp, 'name'> {}