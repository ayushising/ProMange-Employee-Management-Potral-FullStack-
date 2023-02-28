let _obj = {};

export const setGlobal1 = (obj) => {
  Object.assign(_obj, obj);
};
export const getGlobal1 = (varName) => {
  if (_obj[varName] !== undefined) {
    return _obj[varName];
  } else {
    return null;
  }
};
