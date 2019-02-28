export class LoginService{
    isLoggedIn: boolean = false;

    login(email: string, password: string){
            if(email === 'zameer@ahex.co.in' && password === 'ahextech'){
                this.isLoggedIn = true;
            }else{
                this.isLoggedIn = false;
            }
            return  this.isLoggedIn;
        }
}