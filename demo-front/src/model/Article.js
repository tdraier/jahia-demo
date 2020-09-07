class Article {
    constructor(id, title, content, userId) {
      this.title = title;
      this.content = content;
      this.userId = userId;
      this.id = id;
    }
  
    getTitle() {
      return this.title
    }
  
    getContent() {
      return this.content
    }
  
    getUserId() {
      return this.userId
    }
  
    getId() {
      return this.id
    }
  }
    
  export default Article;