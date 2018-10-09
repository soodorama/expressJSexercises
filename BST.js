class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
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
}