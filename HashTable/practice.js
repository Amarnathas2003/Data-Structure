class HashTable {
    constructor() {
        this.table = new Array(100);
        this.size = 0;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    insert(key, value) {
        const index = this.hash(key);
        return this.table[index] = value;

    }

    lookup(key) {
        const index = this.hash(key);
        return this.table[index];
    }

    deletion(key) {
        const index = this.hash(key);
        return this.table[index] = undefined;
    }
}

const hashTable = new HashTable()

hashTable.insert("name", "amarnath")

console.log(hashTable.lookup("name"));


