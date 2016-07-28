/// <reference path="fourslash.ts" />

//// //@fileName: file1.ts
//// namespace A { export var y; }
//// class A { }

//// //@fileName: file2.ts
//// interface A { x: string }
//// import /*y*/y = /*cc*/A from "./file1";
//// 



goTo.marker('y');
verify.quickInfoIs('class Sphere');

goTo.marker('Muto');
verify.quickInfoIs('class Sphere');

/*goTo.marker('insertHere');
edit.insert("ray: Ray;");

goTo.marker('className');

verify.quickInfoIs('class Sphere');*/