export class Tweet {
  comment: string;
  createdAt: Date;

  constructor(comment: string, createdAt: string) {
    this.comment = comment;
    this.createdAt = new Date(Date.parse(createdAt));
  }
}
