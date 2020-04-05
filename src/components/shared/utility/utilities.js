export const joinClasses = classes => classes.filter(Boolean).join(' ');

export const getStorageURLs = (db, ref) => {
  db.storage().ref(ref).listAll().then((data) => {
    Promise.all(data.items.map(async (itemRef) => {
      const url = await itemRef.getDownloadURL();
      return url;
    })).then((data) => {
      console.log(data);
    });
  });
}

export const ObjectFromArray = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};