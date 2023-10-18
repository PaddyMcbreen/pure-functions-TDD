function cloneObjects(target, source) {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  }

module.exports = cloneObjects;