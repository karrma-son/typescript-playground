import { Content } from "./Content";

export class BlogPost extends Content{
    constructor(
        topic: string, 
        title: string, 
        author: string, 
        createdAt: Date, 
        published: boolean = false,
        public tags: string[],
        public readingTime: number
    ){
        super(topic, title, author, createdAt, published);
    }

    getSummary(): string {
        return `${this.topic} ${this.getContentType()} by → ${this.author} • ${this.createdAt.toDateString()} `
    }
    
    getContentType(): string {
        
         return (`Blog Post`)
    }
         
     
    publish(): void {
        this.published = true
    }
    
  
}



const blog1 = new BlogPost("New", "The Start of Something", "Jason Paz", new Date(), true, ["Night", "Bedtime"], 83)

console.log(blog1.getSummary())

console.log(blog1.getMeta())
blog1.publish()
console.log(blog1.published)
blog1.togglePublish()
console.log(blog1.published)

