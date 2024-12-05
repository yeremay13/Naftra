// indexedDB.js
export const openDb = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('commentsDB', 1);
  
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('comments')) {
          db.createObjectStore('comments', { keyPath: 'id', autoIncrement: true });
        }
      };
  
      request.onerror = (event) => {
        reject('Error opening database:', event);
      };
  
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
    });
  };
  
  export const getComments = async () => {
    const db = await openDb();
    const transaction = db.transaction('comments', 'readonly');
    const store = transaction.objectStore('comments');
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = (event) => {
        reject('Error fetching comments:', event);
      };
    });
  };
  
  export const addComment = async (comment) => {
    const db = await openDb();
    const transaction = db.transaction('comments', 'readwrite');
    const store = transaction.objectStore('comments');
    return new Promise((resolve, reject) => {
      const request = store.add(comment);
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = (event) => {
        reject('Error adding comment:', event);
      };
    });
  };
  
  export const updateComment = async (id, updatedText) => {
    const db = await openDb();
    const transaction = db.transaction('comments', 'readwrite');
    const store = transaction.objectStore('comments');
    return new Promise((resolve, reject) => {
      const request = store.get(id);
      request.onsuccess = () => {
        const comment = request.result;
        if (comment) {
          comment.text = updatedText;
          const updateRequest = store.put(comment);
          updateRequest.onsuccess = () => {
            resolve(updateRequest.result);
          };
          updateRequest.onerror = (event) => {
            reject('Error updating comment:', event);
          };
        } else {
          reject('Comment not found');
        }
      };
      request.onerror = (event) => {
        reject('Error fetching comment for update:', event);
      };
    });
  };
  
  export const deleteComment = async (id) => {
    const db = await openDb();
    const transaction = db.transaction('comments', 'readwrite');
    const store = transaction.objectStore('comments');
    return new Promise((resolve, reject) => {
      const request = store.delete(id);
      request.onsuccess = () => {
        resolve(id);
      };
      request.onerror = (event) => {
        reject('Error deleting comment:', event);
      };
    });
  };
  