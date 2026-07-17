import { Content } from "./Content";

export class Announcement extends Content {

    constructor(
        topic: string, 
        title: string, 
        author: string, 
        createdAt: Date, 
        published: boolean = false,
        public priority: "low" | "medium" | "high",
        public expiresAt?: Date 
    ){ 
        super(topic, title, author, createdAt, published);
    }
    
    getSummary(): string {
         return `${this.topic} - ${this.title} by → ${this.author} • ${this.createdAt.toDateString()} •  ${this.priority} • ${this.expiresAt?.toDateString()  }`
    }

    getContentType(): string {
        return(`Announcement`)
    }

    publish(): void {
         this.published = true;
    }

 

    isExpired():boolean {
        if (!this.expiresAt){
            return false
        }
        return new Date() > this.expiresAt;
    }
}

const announcement1 = new Announcement("Breaking News", "Strong Wind Gusts", "Mark Kramp", new Date(), false, "high", new Date(2026, 3, 15));
const announcement2 = new Announcement("Light-Hearted", "Puppies, Kitties, Frogs", "Yauo Razor", new Date(), false, "low", new Date(2026, 7, 19));

console.log(announcement1.getSummary())
console.log(announcement2.getSummary())

console.log(announcement1.getMeta())
console.log(announcement2.getMeta())


console.log(`Is this expired: ${announcement1.isExpired()}`)

console.log(`Is this expired: ${announcement2.isExpired()}`)

console.log(announcement2.published)
announcement2.publish()
console.log(announcement2.published)
announcement2.togglePublish()
console.log(announcement2.published)