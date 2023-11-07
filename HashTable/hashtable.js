class HashTable {
    constructor() {
        this.table = new Array(100);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    put(key, value) {
        const index = this.hash(key)
        this.table[index] = value;
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined;
    }
}

const hashTable = new HashTable();
hashTable.put("name", "Amarnath");
console.log(hashTable.get("name"));