class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        word = word.toLowerCase();
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this.root;
        word = word.toLowerCase();
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEnd;
    }

    delete(word) {
        return this.deleteWord(this.root, word, 0);
    }

    deleteWord(node, word, index) {
        if (!node) {
            return false;
        }

        if (index === word.length) {
            if (!node.isEnd) {
                return false;
            }
            node.isEnd = false;
            return Object.keys(node.children).length === 0;
        }

        let char = word[index];
        let nextNode = node.children[char];

        const shouldDeleted = this.deleteWord(nextNode, word, index + 1);

        if (shouldDeleted) {
            delete node.children[char];
            return Object.keys(node.children).length === 0;
        }
    }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.search("app"));
trie.delete("app");
console.log(trie.search("apple"));
console.log(trie.search("app")); 