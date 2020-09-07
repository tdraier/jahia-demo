class Editor {
    constructor(id, userId, role) {
      this.role = role;
      this.userId = userId;
      this.id = id;
    }
  
    getRole() {
      return this.role
    }

    getUserId() {
      return this.userId
    }
  
    getId() {
      return this.id
    }
  }
    
  export default Editor;