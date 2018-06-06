export class BlogPost {
    private _id: string;
    private _title: string;
    private _content: string;
    private _tags: string;
    private _publishedAt: Date;


    constructor(id: string, title: string, content: string, tags: string, publishedAt: Date) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._tags = tags;
        this._publishedAt = publishedAt;
    }


    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get content(): string {
        return this._content;
    }

    get tags(): string {
        return this._tags;
    }

    get publishedAt(): Date {
        return this._publishedAt;
    }
}
