/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	//base case:
	//both p q null > true || p or q null or p.val !===q.val > false
	//recursive compare both tree's left side and right side
	if (!p && !q) return true;
	if (!p || !q || p.val !== q.val) return false;

	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

//Time:O(p+q)
