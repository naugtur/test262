// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.1.5-4-4-a-1-s
description: >
    Object literal - No SyntaxError for duplicate data property names
includes: [runTestCase.js]
---*/

function testcase() {
  eval("({foo:0,foo:1});");
  return true;
}
runTestCase(testcase);
