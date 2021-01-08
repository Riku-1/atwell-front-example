export class Tweet {
  comment: string;
  createdAt: string;

  constructor(comment: string, createdAt: string) {
    this.comment = comment;
    this.createdAt = createdAt;
  }
}
