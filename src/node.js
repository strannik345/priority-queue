class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		if(this.left && this.right)
		{
			return false;
		}
		
		if(!this.left)
		{
			this.left=node;
			node.parent=this;
		}
		else
		{
			this.right=node;
			node.parent=this;
		}

	}

	removeChild(node) {
		if(this.left.data==node.data)
		{
			this.left.parent=null;
			this.left=null;
		}
		else if(this.right.data==node.data)
		{
			this.left.parent=null;
			this.right=null;
		}
		else
		{
			throw Error;
		}
	}

	remove() {
		if(!this.parent)
		{
			return false;
		}
		else
		{
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if(!this.parent)
		{
			return false;
		}
		if(this.parent.left==this)
		{
			let parent = this.parent; 
			let right = this.parent.right;
			if(this.parent.parent)
			{
				if(this.parent.parent.left==parent)
					this.parent.parent.left = this;
				else
					this.parent.parent.right = this;
			}
			parent.left = this.left;
			parent.right = this.right;
			this.parent = parent.parent;
			this.left = parent;
			this.right = right;
			parent.parent = this;
			
			if(right)
			{
				right.parent=this;
			}			
		}
		else if(this.parent.right==this)
		{
			let parent=this.parent;
			let left=this.parent.left;
			if(this.parent.parent)
				this.parent.parent.right = this;
			parent.left = this.left;
			parent.right = this.right;
			this.parent = parent.parent;
			this.rigth = parent;
			this.left = left;
			parent.parent = this;
			
			if(left)
			{
				left.parent=this;
			}			
		}
	}
}

module.exports = Node;
