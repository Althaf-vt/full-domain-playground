class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}


class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let node = this.root;

        for(let char of word){
            if(!node.children[char]) node.children[char] = new TrieNode();
            node = node.children[char];
        }

        node.isEndOfWord = true;
    }

    search(word){
        let node = this.root;

        for(let char of word){
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix){
        let node = this.root;

        for(let char of prefix){
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }

    autoComplete(prefix){
        let node = this.findPrefixNode(prefix);
        let result = [];

        if(!node) return result;

        this.collectWords(prefix,node, result);
        return result;
    }

    findPrefixNode(prefix){
        let node = this.root;

        for(let char of prefix){
            if(!node.children[char]) return null;
            node = node.children[char];
        }
        return node;
    }

    collectWords(prefix, node, result){
        if(node.isEndOfWord) result.push(prefix);

        for(let char in node.children){
            this.collectWords(prefix + char, node.children[char], result)
        }
    }

    longestCommonPrefix(){
        let node = this.root;
        let prefix = '';

        while(node){
            let keys = Object.keys(node.children);

            if(keys.length !== 1 || node.isEndOfWord) break;

            let char = keys[0];
            prefix += char
            node = node.children[char];
        }
        return prefix;
    }
}