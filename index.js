function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i]);
      }
    }
  
    return collection;
  }

  function myMap(collection, callback) {
    let newArray = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i], i));
      }
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      const keys = Object.keys(collection);
      for (let i = 0; i < values.length; i++) {
        newArray.push(callback(values[i], keys[i]));
      }
    }
  
    return newArray;
  }

  function myReduce(collection, callback, acc) {
    let startIdx = 0;
  
    if (acc === undefined) {
      if (Array.isArray(collection)) {
        acc = collection[0];
        startIdx = 1;
      } else if (typeof collection === 'object') {
        const keys = Object.keys(collection);
        acc = collection[keys[0]];
        startIdx = 1;
      } else {
        return undefined;
      }
    }
  
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i], i, collection);
      }
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      const keys = Object.keys(collection);
      for (let i = startIdx; i < values.length; i++) {
        acc = callback(acc, values[i], keys[i], collection);
      }
    }
  
    return acc;
  }

  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      const keys = Object.keys(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          return values[i];
        }
      }
    }
  
    return undefined;
  }

  function myFilter(collection, predicate) {
    let result = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      const keys = Object.keys(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          result.push(values[i]);
        }
      }
    }
  
    return result;
  }

  function mySize(collection) {
    if (Array.isArray(collection) || typeof collection === 'string') {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    } else {
      return 0;
    }
  }

  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }

  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }

  function myKeys(object) {
    return Object.keys(object);
  }

  function myValues(object) {
    return Object.values(object);
  }
  