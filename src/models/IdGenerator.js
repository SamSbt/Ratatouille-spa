export default class IdGenerator {
  static generateId() {
    return '_' + Math.random().toString(36).slice(2, 9);
  }
}