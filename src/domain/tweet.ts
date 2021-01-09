export class Tweet {
  comment: string;
  createdAt: Date;

  constructor(comment: string, createdAt: Date) {
    this.comment = comment;
    this.createdAt = createdAt;
  }
}
