class User {

    constructor(
        public id:number,
        public username:string,
        public email:string,
        public isLoggedIn:boolean = false
    ){ }

    login(): User{
        this.isLoggedIn = true;
        return this;
    }

    
    logout(): User{
       this.isLoggedIn = false
       return this;

    }
    
    getProfile(): string{
        const userProfile =` ${this.username}, ${this.email}, ${this.isLoggedIn}`
        return userProfile;
    }
}

let newUser1 = new User(1, "JoeSchmoe432", "joe@gmail.com")



console.log(newUser1.login().getProfile());
console.log(newUser1.logout().getProfile());
