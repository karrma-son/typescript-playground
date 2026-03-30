class Post {
 constructor( 
    public id: number,
    public title: string,
    public content: string,
    public author: string,
    public likes: number = 0,
    ) 
    {};
    
    postsArr:string[] = [];
    maxLikes = 6;
    contentmax = 100;
    
 
    get isActive():boolean {
        return !!this.author;
    }
    get isPopular():boolean {
        return this.likes > 5;
    }

    like(){
      
        if(this.likes >= this.maxLikes){
            this.likes += 0;
            console.log(`${this.author} has reached max likes`)
           
        } else{
        this.likes += 1;
         console.log(`${this.author} article has been liked`)
        }
        return this;
       
       
    }

    unlike(){
        if(this.likes > 0){
            this.likes -= 1;}
        else if ( this.likes <= 0){
            console.log("You can't go under 0")
        }
    
        return this;
    }

    addContent(content:string){
        this.content = content;
       
        this.postsArr=[content];
       

        if (this.content.length > this.contentmax){
            console.log("Content is too long")
        }
        console.log(`${this.postsArr}, ${this.author}`);
        
        return content;
    }


    getSummary(){
     
       return `${this.id}, ${this.title}, ${this.content}, ${this.author}, ${this.likes}, ${this.isPopular}, ${this.isActive}`
    
    }

   
}
const post1 = new Post(1, "Learning more about TS", "Long content...", "Mason");
const post2 = new Post(2, "", "", "");
post1.like()?.like()?.like()?.like()?.like()?.like()?.like()?.like()?.like()?.like()?.like();

console.log(post1.getSummary());

post1.unlike()?.unlike()?.unlike()?.unlike()?.unlike().unlike().unlike().unlike().unlike().unlike().unlike().unlike();



let content1 = JSON.stringify(post1.addContent("Welcome to the future"));
let content2 = JSON.stringify(post1.addContent("This is more content"));

console.log(post1.getSummary());
console.log(post2.getSummary());

console.log(content1)

console.log(content2)