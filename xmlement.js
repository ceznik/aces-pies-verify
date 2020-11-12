var fs = require('fs');

var et = require('elementtree');

var XML = et.XML;
var ElementTree = et.ElementTree;
var element = et.Element;
var subElement = et.SubElement;

var data, etree;

data = fs.readFileSync(process.argv[2]);
etree = et.parse(data);

console.log(etree.findall('./ACES/App').length);
