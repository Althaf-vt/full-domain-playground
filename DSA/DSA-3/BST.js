class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function buildBst(arr){
    let root = null;
    for(let num of arr){
        root = insert(root,num);
    }
    return root;
}
let arr = [10,20,30]

function insert(root,value){
    if(!root) return new Node(value);

    if(value < root.value){
        root.left = insert(root.left, value);
    }else{
        root.right = insert(root.right, value);
    }
    return root;
};

function search(root,target){
    if(!root) return false;

    if(root.value === target) return true;

    if(target < root.value){
        return search(root.left, target);
    }else{
        return search(root.right, target)
    }
}

// ---------- PRINT TREE (VISUAL WITH LINKS) ----------
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

// ---------- USAGE ----------
// const root = buildBst([1,2,3,4]);

// printTree(root);

function deleteNode(root,key){
    if(!root) return null;

    if(key < root.value){
        root.left = deleteNode(root.left,key);
    }else if(k > root.value){
        root.right = deleteNode(root.right, key);
    }else{
        if(!root.left) return root.right;
        if(!root.right) return root.left;

        let inorderSucc = getInorderSucc(root.right);

        root.value = inorderSucc.value;

        root.right = deleteNode(root.right, inorderSucc.value)
    }
}

function getInorderSucc(root){
    while(root && root.left){
        root = root.left;
    }
    return root;
}

function isBst(root,min,max){
    if(!root) return true;

    if(root.value <= min || root.value >= max) return false;

    return (
        isBst(root.left,min, root.value) && isBst(root.right, root.value, max)
    )
}

function LCA(root,p,q){
    if(!root) return null;

    if(p < root.value && q < root.value){
        return LCA(root.left, p, q);
    }else if(p > root.value && q > root.value){
        return LCA(root.right, p, q);
    }else{
        return root;
    }
}

function kthSmallest(root,k){
    let count = 0;
    let result = null;

    function inorder(root){
        if(!root) return null;

        inorder(root.left);
        count ++;
        if(count === k) {
            result = root.value 
            return
        };
        inorder(root.right);
    }
    inorder(root)
    return result;
}

function kthLargest(root,k){
    let count = 0, result = null;

    function inorderRev(root){
        if(!root) return null;

        inorderRev(root.right);
        count ++;
        if(count === k) {
            result = root.value 
            return
        };
        inorderRev(root.left);
    }
    inorderRev(root);
    return result;
}

function BstTOSortedArray(root){
    let result = [];

    function inorder(root){
        if(!root) return null;
        
        inorder(root.left);
        result.push(root.value);
        inorder(root.right);
    }
    inorder(root);
    return result;
}

