/* exported root */
"use strict";

function TagTree(name, parents) {
	var tagTree = this;
	tagTree.name = name;
	tagTree.subTags = {};
	tagTree.local = [];
	tagTree.parents = parents || [];
	tagTree.terminal = true;

	tagTree.add = function (o, tags) {
		this.dirty = true;

		if (typeof tags === "string") {
			tags = tags.split(":");
		}

		if ( tags.length ) {
			var tag = tags.shift();

			if ( ! tagTree.subTags[tag] ) {
				tagTree.subTags[tag] = new TagTree(tag, tagTree.parents.concat(tagTree));
			}

			tagTree.subTags[tag].add(o, tags);
			tagTree.terminal = false;
		}

		if ( tagTree.local.indexOf(o) === -1 ) {
			tagTree.local.push(o);
			tagTree.local.sort(function (a, b) {
				return a.name > b.name;
			});
		}
	};
}

var root = new TagTree("All");