class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    addToSubTree(val) {
        if (this.val < val) {
            if (this.right != null) {
                return this.right.addToSubTree(val);
            }
            else {
                this.right = new Node(val);
            }
        }
        else {
            if (this.left != null) {
                return this.left.addToSubTree(val);
            }
            else {
                this.left = new Node(val);
            }
        }
        return;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    add(val) {
        var node = new Node(val)
        if (this.root == null) {
            this.root = node;
            return this;
        }
        var walker = this.root;
        var follower = null;
        while (walker != null) {
            follower = walker;
            if (val > walker.val) {
                walker = walker.right;
            }
            else {
                walker = walker.left;
            }
        }
        if (val > follower.val) {
            follower.right = node;
        }
        else {
            follower.left = node;
        }
        return this;
    }

    addR(val) {
        if (this.root == null) {
            this.root = new Node(val);
            return this;
        }
        this.root.addToSubTree(val);
        return this;
    }

    inorder() {
        this.inorderFromRoot(this.root)
    }

    inorderFromRoot(node) {
        if (node.left) {
            this.inorderFromRoot(node.left);
        }
        console.log(node.val)
        if(node.right) {
            this.inorderFromRoot(node.right)
        }
        return this;
    }

    preorder() {
        this.preorderFromRoot(this.root)
    }

    preorderFromRoot(node) {
        console.log(node.val);
        if (node.left) {
            this.preorderFromRoot(node.left)
        }
        if (node.right) {
            this.preorderFromRoot(node.right)
        }
        return this;
    }

    postorder() {
        this.postorderFromRoot(this.root)
    }

    postorderFromRoot(node) {
        if (node.left) {
            this.postorderFromRoot(node.left)
        }
        if (node.right) {
            this.postorderFromRoot(node.right)
        }
        console.log(node.val);
        return this;
    }
}