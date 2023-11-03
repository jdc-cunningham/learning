const textArea = document.getElementById('textarea');
const saveBtn = document.getElementById('save');
let store = null;

// can reference here because added by script before this one
// indexedDbStore included by other script

// check if indexedDB available
if (window.indexedDB) {
    store = indexedDbStore;
    store.init();
} else {
    alert('IndexedDB not available. Using local storage instead.');
    store = localStorage;
}