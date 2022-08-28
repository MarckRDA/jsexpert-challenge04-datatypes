class User {
  constructor({ id }) {
    this.id = id;
  }
  
  get [Symbol.toStringTag]() {
    return 'USER'
  }
  
  [Symbol.toPrimitive](coercionType) {
    if (coercionType !== 'string') throw new TypeError();

    return `[id=${this.id}]`;
  }
}

export default User;
