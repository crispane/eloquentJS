let regex = /abc/;
console.log('');
console.log('a: ');
console.log(regex.test('abc'));
console.log(regex.test('ab'));

let re = /[abc]/;
console.log('');
console.log('b: ');
console.log(re.test('ac'));
console.log(re.test('-1'));

let re1 = /\d/;
console.log('');
console.log('1: ');
console.log(re1.test('a2c'));
console.log(re1.test('a23c'));
console.log(re1.test('ac'));

let re1a = /[\*]'\d'[\*]/;
console.log('');
console.log('1a: ');
console.log(re1a.test('a2c'));
console.log(re1a.test('a23c'));
console.log(re1a.test('ac'));

let re2 = /\d\w/;
console.log('');
console.log('2: ');
console.log(re2.test('a2c'));
console.log(re2.test('ac'));

let re3 = /[\d\w]/;
console.log('');
console.log('3: ');
console.log(re3.test('a2c'));
console.log(re3.test('a12c'));
console.log(re3.test('-;'));

let re4 = /a[\d\w]/;
console.log('');
console.log('4: ');
console.log(re4.test('a2c'));
console.log(re4.test('as2c'));
console.log(re4.test('-;'));
console.log(re4.test('ba2c'));

//Exactly one 'a'
let re5 = /\b[^\Wa]*a[^\Wa]*\b/;
//let re5 = /^[a]+$/;
console.log('');
console.log('5: ');
console.log(re5.test('wa2c'));
console.log(re5.test('c2a'));
console.log(re5.test('c2asa'));
console.log(re5.test('aa2c'));
console.log(re5.test('faa2c'));
console.log(re5.test('aaav'));
console.log(re5.test('aadav'));
console.log(re5.test('b2c'));
