export abstract class Content{
    constructor(
        public id: string,
        public title: string,
        public author: string,
        public createdAt: Date,
        public published: boolean = false,
    ){};

    abstract getSummary(): string;
    abstract getContentType(): string;
    abstract publish(): void
    
    togglePublish(): void {
        this.published = !this.published
    }
    
    getMeta(): string{
        return `${this.getContentType} by - ${this.author} ${this.createdAt.toDateString}`

    }
}