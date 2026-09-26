// class TrieNode{
//     constructor(){
//         this.children = {};
//         this.isEndOfWord = false;
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode();
//     }

//     insert(word){
//         let node = this.root;
//         for(let char of word){
//             if(!node.children[char]) node.children[char] = new TrieNode();

//             node = node.children[char];
//         }
//         node.isEndOfWord = true;
//     }

//     search(word){
//         let node = this.root;
//         for(let char of word){
//             if(!node.children[char]) return false;
//             node = node.children[char];
//         }
//         return node.isEndOfWord;
//     }

//     startsWith(prefix){
//         let node = this.root;
//         for(let char of prefix){
//             if(!node.children[char]) return false;
//             node = node.children[char];
//         }
//         return true;
//     }

//     autoComplete(prefix){
//         let node = this.findPrefixNode(prefix);
//         let result = [];

//         if(!node) return result;

//         this.collectWords(node, prefix, result);
//         return result;

//     }

//     findPrefixNode(prefix){
//         let node = this.root;
//         for(let char of prefix){
//             if(!node.children[char]) return false;
//             node = node.children[char];
//         }
//         return node;
//     }

//     collectWords(node, prefix, result){
//         if(node.isEndOfWord) result.push(prefix);

//         for(let char in node.children){
//             this.collectWords(node.children[char], prefix + char, result)
//         }
//     }

//     longestWord(){
//         let result = '';

//         const dfs = (node, path) => {
//             if(!node) return;

//             if(node !== this.root && !node.isEndOfWord) return;


//             if(path.length > result.length ||
//                 (path.length === result.length && path < result)
//             ){
//                 result = path;
//             }

//             for(let char in node.children){
//                 dfs(node.children[char],path + char);
//             }
//         }
//         dfs(this.root, "");
//         return result;
//     }

//     longestCommonPrefix(){
//         let node = this.root;

//         let prefix = '';

//         while(node){
//             const keys = Object.keys(node.children);

//             if(keys.length !== 1 || node.isEndOfWord) return;

//             let char = keys[0];
//             prefix += char;
//             node = node.children[char]
//         }
//         return prefix;
//     }
// }

// const trie = new Trie();

// trie.insert('hello');
// trie.insert('hi');
// trie.insert('hello world');
// trie.insert('hell');
// trie.insert('heloriouse');
// trie.insert('althaf');
// trie.insert('zoo');
// console.log(trie.search('hi'));
// console.log(trie.startsWith('alth'));
// console.log(trie.autoComplete('a'));



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
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
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

        this.collectWords(node, prefix, result);
        return result
    }

    collectWords(node, prefix, result){

        if(node.isEndOfWord) result.push(prefix);

        for(let char in node.children){
            this.collectWords(node.children[char], prefix + char, result);
        }
    }

    findPrefixNode(prefix){
        let node = this.root;

        for(let char of prefix){
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return node;
    }

    longestCommonPrefix(){
        let node = this.root;

        let prefix = "";

        while(node){
            let keys = Object.keys(node.children);

            if(keys.length !== 1 || node.isEndOfWord) break;

            let char = keys[0];
            prefix += char;
            node = node.children[char];
        }
        return prefix;
    }

    longestWord(){
        let result = '';

        const dfs = (node, path) => {
            if(!node) return;

            if(node !== this.root && !node.isEndOfWord) return;


            if(path.length > result.length || (path.length === result.length && path < result)){
                result = path;
            }

            for(let char in node.children){
                dfs(node.children[char],path + char);
            }
        }
        dfs(this.root, "");
        return result;
    }

    longestWord2(){
        let result = '';

        const dfs = (node, path) => {
            if(!node) return;

            // Only update when it's a complete word
            if(node.isEndOfWord){
                if(path.length > result.length || (path.length === result.length && path < result)){
                    result = path;
                }
            }

            for(let char in node.children){
                dfs(node.children[char], path + char);
            }
        }

        dfs(this.root, "");
        return result;
    }

    delete(word){
        const deleteHelper = (node,word,index) => {
            if(index === word.length){
                if(!node.isEndOfWord) return false;
                
                node.isEndOfWord = false;
                
                return Object.keys(node.children).length === 0;
            }
            
            let char = word[index];
            let childNode = node.children[char];
            
            if(!childNode) return false
            
            let shouldDelete = deleteHelper(childNode, word, index + 1);
            
            if(shouldDelete){
                delete node.children[char];
                
                return Object.keys(node.children).length === 0 && !node.isEndOfWord;
            }
            return false
        }
        
        deleteHelper(this.root,word,0)
    }
    printAllWords() {
        const result = [];

        const dfs = (node, path) => {
            if (!node) return;

            if (node.isEndOfWord) {
                result.push(path);
            }

            for (let char in node.children) {
                dfs(node.children[char], path + char);
            }
        };

        dfs(this.root, '');
        return result;
    }

}
