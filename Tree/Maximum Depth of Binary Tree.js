/**
 *Given the root of a binary tree, return its maximum depth.
  A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: 3
  Example 2:
    Input: root = [1,null,2]
    Output: 2
 *
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
 * @param {TreeNode} root
 * @return {number}
 */

//Recursive DFS solution:
var maxDepth = function (root) {
	//if root is null return 0
	//recursive find the max between dfs left & dfs right +1 <=(check the two subset of root)

	return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
