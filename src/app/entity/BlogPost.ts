export class BlogPost {
    public readonly id: string;
    public readonly author: string;
    public readonly title: string;
    public readonly content: string;
    public readonly tags: string;
    public readonly publishedAt: Date;

    constructor(id: string, author: string, title: string, content: string, tags: string, publishedAt: Date) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.content = content;
        this.tags = tags;
        this.publishedAt = publishedAt;
    }
}
