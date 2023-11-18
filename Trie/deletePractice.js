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
        for (let char of word) {
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

        for (const char of word) {
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
                return false
            }

            node.isEnd = false;
            return Object.keys(node.children).length === 0;
        }

        let char = word[index];
        let nextNode = node.children[char];

        let shouldDelete = this.deleteWord(nextNode, word, index + 1);

        if (shouldDelete) {
            delete node.children[char]; //Current Node
            return Object.keys(node.children).length === 0;
        }
    }
}

const trie = new Trie();

trie.insert("Hello")

console.log(trie.prefixSearch("hello"));