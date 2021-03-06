'use strict';

const test = require('tape');
const putasset = require('..');

const empty = () => {};

const owner = 'coderaiser';
const repo = 'putasset';
const tag = 'v1.0.0';
const filename = 'release.zip';

test('arguments: token', (t) => {
    const fn = () => putasset(123, {owner, repo, tag});
    
    t.throws(fn, /token must to be a string!/, 'should throw when token not string');
    t.end();
});

test('arguments: callback', (t) => {
    const fn = () => putasset('', {owner, repo, tag, filename});
    
    t.throws(fn, /callback must to be function!/, 'should throw when no callback');
    t.end();
});

test('arguments: owner', (t) => {
    const fn = () => putasset('', {repo}, empty);
    
    t.throws(fn, /owner must to be a string!/, 'should throw when token not string');
    t.end();
});

test('arguments: repo', (t) => {
    const fn = () => putasset('', {owner}, empty);
    
    t.throws(fn, /repo must to be a string!/, 'should throw when repo not string');
    t.end();
});

test('arguments: tag', (t) => {
    const fn = () => putasset('', {owner, repo}, empty);
    
    t.throws(fn, /tag must to be a string!/, 'should throw when tag not string');
    t.end();
});

test('arguments: filename', (t) => {
    const fn = () => putasset('', {owner, repo, tag}, empty);
    
    t.throws(fn, /filename must to be a string!/, 'should throw when filename not string');
    t.end();
});

