class TrieNode {
    constructor() {
        this.children = {}
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
                //Current node(root node) nte children ayi wordnte first letter assign cheyyunnu
                //Just imagine that for every for the root node we are creating child nodes with character in the word
                node.children[char] = new TrieNode();
            }
            node = node.children[char]
        }
        node.isEnd = true;
    }


    search(word) {
        let node = this.root;
        word = word.toLowerCase()

        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char]
        }
        return node.isEnd;
    }

    prefixSearch(word) {
        let node = this.root;
        word = word.toLowerCase();
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char]
        }
        return true;
    }
}


let trie = new Trie();

trie.insert("Hello World")

console.log(trie.search("hello world"));

console.log(trie.prefixSearch("hell"));
