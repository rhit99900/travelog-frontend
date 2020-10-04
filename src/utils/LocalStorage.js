
class LocalStorage {
  static MemoryStorage = {};

  static setItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      this.MemoryStorage[key] = value;
    }
  }

  static getItem(key) {
    try {
      // localStorage.setItem('test', 'test'); /* For Safari, since local storage is non existent*/
      if (localStorage.getItem(key)) {
        return localStorage.getItem(key);
      }
    } catch (e) {
      if (this.MemoryStorage[key]) {
        return this.MemoryStorage[key];
      }
    }
    return null;
  }

  static removeItem(key) {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem(key);
    } catch (e) {
      delete this.MemoryStorage[key];
    }
  }
}

export default LocalStorage;

