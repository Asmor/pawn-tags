/* exported addPawn */
/* global root */
"use strict";

function Pawn(args) {
	this.name = args.name;
	this.number = args.number;
	this.qty = args.qty;
	this.set = args.set;
	this.size = args.size;
	this.tags = (typeof args.tags === "string") ? args.tags.split(", ") : args.tags;
	this.sheet = args.sheet;

	this.pawnClass = (args.sheet === "0") ? [
		"pawn",
		args.size,
		"no-pawn-available",
	].join(" ") : [
		"pawn",
		args.size,
		args.set,
		"sheet" + args.sheet,
		"row" + args.row,
		"col" + args.col,
	].join(" ");

	for ( var i = 0; i < this.tags.length; i++ ) {
		root.add(this, this.tags[i]);
	}
}

var pawns = [];

function addPawn(s) {
	var matches = s.match(/^([^\t]+)\t(\d+)\t(small|medium|large|huge)\t(\d+)\t(\d+)\t(\d+)\t(\d+)\t([^\t]+)\t+([^,]+(?:, [^,]+)*)$/);
	if (!matches) {
		console.warn("Unable to interpolate:", s);
	} else {
		pawns.push(new Pawn({
			set:	matches[1],
			number:	matches[2],
			size:	matches[3],
			qty:	matches[4],
			sheet:	matches[5],
			row:	matches[6],
			col:	matches[7],
			name:	matches[8],
			tags:	matches[9],
		}));
	}
}

