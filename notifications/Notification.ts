class BaseNotification {

    constructor(
        public recipient: string,
        public message: string,
        public priority?: number,
        
    ){}
    
    send():string;

    send(priority:number): string
    
    send(arg1?:number):string {
        if (typeof arg1 === 'number'){
            const priorityText = arg1;
            return (`[${priorityText}] Sending "${this.message}" to ${this.recipient}`); 
        } 
           
         return (`Sending "${this.message}" to ${this.recipient}`)

    }
   
}

class EmailNotification extends BaseNotification {

    constructor(
        recipient:string, 
        message:string, 
        public emailAddress?: string
    ){ 
        super(recipient, message);
    }
    
   override send(priority?: number):string{
    const priorityText = priority ? `[Priority ${priority}] ` : '';
    return (`${priorityText}Sending to ${this.emailAddress}: ${this.message}`)
       
    }
}

class SMSNotification extends BaseNotification {
    constructor(
        recipient:string,
        message:string, 
        public phoneNumber:number
    ){
        super(recipient, message);
    }

    override send(priority?: number):string {
        const priorityText = priority ? `[Priority ${priority}] ` : '';
        return (`${priorityText} Sending to ${this.phoneNumber}: ${this.message}`)
    }
}

class PushNotification extends BaseNotification{
    constructor(
        recipient:string,
        message:string, 
        public deviceId:number
    ){
        super( recipient, message);
        
    }
    override send(priority?: number):string {
       const priorityText = priority ? `[Priority ${priority}] ` : '';
       return (`${priorityText}Sending to ${this.deviceId}: ${this.message}`)
        
    }

}




const notification: BaseNotification[] = [
    new BaseNotification("John@gmail.com", "Welcome to the new world"),
    new EmailNotification("Eric@gmail.com", "I won't be able to make it", "Joe@gmail.com"),
    new SMSNotification("Bobby", "How are you doing today?", 9028387474),
    new PushNotification("Richie", "HEY BRO WHAT UP", 112)

]

notification.forEach(notification =>{
    console.log(notification.send(1))
})