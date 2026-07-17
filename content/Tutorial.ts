import { Content } from "./Content";

export class Tutorial extends Content {
    constructor(
        topic: string, 
        title: string, 
        author: string, 
        createdAt: Date, 
        published: boolean = false,
        public steps: string[],
        public difficulty: "Beginner" | "Intermediate" | "Advanced",
    
    ){ 
        super(topic, title, author, createdAt, published);
    }


    getSummary(): string {
        return `${this.topic} by → ${this.author} • ${this.createdAt.toDateString()} •  ${this.steps.join(", ")} • ${this.difficulty}`
    }
    
    getContentType(): string {
        
         return (`Tutorial`)
    }
         
     
     publish(): void {
        this.published = true
     }

    
}
const tutorial1 = new Tutorial("Old", "Man is not worthy", "Charles Schwab", new Date(), true, ["First do this", "then do this", "then build "], "Beginner")
console.log(tutorial1.getSummary())
console.log(tutorial1.getContentType())
console.log(tutorial1.getMeta())