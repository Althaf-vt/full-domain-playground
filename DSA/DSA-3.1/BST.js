class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

function buildBST(arr){
    let root = null;

    for(let num of arr){
        root = insert(root,num);
    }
    return root;
}

function insert(root, value){
    if(!root) return new Node(value);

    if(value < root.value){
        root.left = insert(root.left, value);
    }else{
        root.right = insert(root.right, value)
    }
    return root;
}

function search(root,tg){
    if(!root) return false;

    if(tg === root.value){
        return true
    }else if(tg < root.value){
        return search(root.left,tg);
    }else{
        return search(root.right,tg);
    }
}


function inOrder(root){
    if(!root) return;

    inOrder(root.left);
    console.log(root.value);
    inOrder(root.right);
}

function preOrder(root){
    if(!root) return;

    console.log(root.value);
    preOrder(root.left);
    preOrder(root.right);
}

function postOrder(root){
    if(!root) return ;

    postOrder(root.left);
    postOrder(root.right);
    console.log(root.value);
}


function deleteNode(root,key){
    if(!root) return null;

    if(key < root.value){
        root.left = deleteNode(root.left, key);
    }else if(key > root.value){
        root.right = deleteNode(root.right, key)
    }else{
        if(!root.left) return root.right;
        if(!root.right) return root.left;

        const inorderSucc = getInorderSucc(root.right);

        root.value = inorderSucc.value;

        root.right = deleteNode(root.right, inorderSucc.value);
    }
    return root;
}

function getInorderSucc(root){

    while(root && root.left){
        root = root.left
    }
    return root
}

function secondLargest(root){
    if(!root && (!root.left && !root.right)) return null

    let curr = root;

    while(curr){
        if(curr.right && !curr.right.right && curr.right.left){
            return findMax(curr.right.left);
        }

        if(curr.right && !curr.right.right){
            return curr.value;
        }

        curr = curr.right;
    }
}

function findMax(node){
    while(node.right){
        node = node.right
    }
    return node.value;
}

function secondLowest(root) {
   if(!root && (!root.left && !root.right)) return null

    let curr = root;

    while (curr) {

        if (curr.left && !curr.left.left && curr.left.right) {
            return findMin(curr.left.right);
        }

        if (curr.left && !curr.left.left) {
            return curr.value;
        }

        curr = curr.left;
    }
}


function findMin(node) {
    while (node.left) {
        node = node.left;
    }
    return node.value;
}

const root = buildBST([12,23,53,43,2,35,65])
console.log(root);

// console.log(secondLargest(root));
// console.log(secondLowest(root));

function checkIdentical(root1, root2){
    if(!root1 && !root2) return true;

    if(!root || !root2) return false;

    return (
        checkIdentical(root1.left, root2.left) && 
        checkIdentical(root1.right, root2.right)
    )
}

function findHeight(root){
    if(!root) return 0;

    let left = findHeight(root.left);
    let right = findHeight(root.right);

    return Math.max(left,right) + 1;
}

function printTree(root, prefix = "", isLeft = true) {
  if (!root) return;

  if (root.right) {
    printTree(root.right, prefix + (isLeft ? "│   " : "    "), false);
  }

  console.log(prefix + (isLeft ? "└── " : "┌── ") + root.value);

  if (root.left) {
    printTree(root.left, prefix + (isLeft ? "    " : "│   "), true);
  }
}

// printTree(root)
// console.log(findHeight(root))

function countNodes(root){
    if(!root) return 0

    return 1 + countNodes(root.left) + countNodes(root.right);
}

function depth(root){
    if(!root) return 0;

    let left = depth(root.left);
    let right = depth(root.right);

    return 1 + Math.max(left,right);
}

// console.log(countNodes(root))


function balacedPara(str){
    let stack = [];
    let pairs = {
        ']' : '[',
        ')' : '(',
        '}' : '{',
    }

    for(let char of str){
        if(char in pairs){
            if(stack.pop() !== pairs[char]) return false;
        }else{
            stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log(balacedPara('[{]}]'))


