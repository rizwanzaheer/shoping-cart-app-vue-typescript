// Local storage's function handler

// Save/Set the local Storage key value pair
export function storageSave(key: string, value: object) {
  const jsonValue = JSON.stringify(value);
  try {
    localStorage.setItem(key, jsonValue);
    console.log(`LocalStorage: saved value for key: ${key}`);
  } catch (err) {
    console.log(
      `LocalStorage: failed to save value for key: ${key} error: ${err}`
    );
  }
}

// Load/Get/Extract the local Storage key value pair
export function storageLoad(key: string) {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      console.log(`LocalStorage: loaded value for key: ${key}`);
      const jsonValue = JSON.parse(data);
      return jsonValue;
    }
    console.log(`LocalStorage: value does not exist for key: ${key}`);
  } catch (err) {
    console.log(
      `LocalStorage: failed to load value for key: ${key} error: ${err}`
    );
  }
  return null;
}

// Delete the local Storage key value pair
export function storageDelete(key: string) {
  try {
    localStorage.removeItem(key);
    console.log(`LocalStorage: removed value for key: ${key}`);
  } catch (err) {
    console.log(
      `LocalStorage: failed to remove value for key: ${key} error: ${err}`
    );
  }
}
