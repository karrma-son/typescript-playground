import { Content } from "./Content";

class BlogPost extends Content{
    constructor(
        id: string, 
        title: string, 
        author: string, 
        createdAt: Date, 
        published: boolean = false,
        public tags: string[],
        public readingTime: number
    ){
        super(id, title, author, createdAt, published);
    }
    getSummary(): string {
        return `${this.id} by - ${this.author} - ${this.createdAt.toDateString()}`
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
console.log(blog1.getContentType())

blog1.publish()