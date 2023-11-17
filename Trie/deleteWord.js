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

    //Delete a word from the Trie
    delete(word) {
        return this.deleteWord(this.root, word, 0);
    }

    deleteWord(node, word, index) {

        if (!node) {
            return false;
        }

        //Base case: We reach at the end of the word
        if (index === word.length) {
            if (!node.isEnd) {
                //Word not found in array
                return false;
            }

            node.isEnd = false; //Doing this because in reality we are not deleting the word we are just changing the is isEnd Property to false. 
            return Object.keys(node.children).length === 0;//Check the current node has any children associated with it.
        }

        const char = word[index];
        const nextNode = node.children[char];

        //Recursively delete the word
        const shouldDelete = this.deleteWord(nextNode, word, index + 1)
        
        if (shouldDelete) {
            delete node.children[char] //It will delete the current character
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