https://www.youtube.com/watch?v=d56mG7DezGs

### General notes

**What is typescript**

- allows static typing
- catch errors before running app

`let x: number = 10;`

have to transpile TS to JS

### Dev environment

### Start coding

**anotating**

`let age: number`

colon annotate variable age

= part initializes, assigns (duh)

### Configuration file for tsc

`tsc --init`

makes file `tsconfig.json`

can see suggestions in possible values using `ctrl space`

`ES2015, ES2016, ES2017`

if you use a higher value (newer) has less code for polyfill

module, commonjs

`rootDir` where source files are

set dist

**noEmitOnError**

errors in code, still generate JS, cancel generation

now can just run `tsc` to compile, no specifying

stopped at 17:25

sourcemap - file that specifies how each line of ts code maps to generated js code

launch.json how to debug

got debugger running though had a warning

step over, step out... etc

can watch variables change cool, watch tab under run and debug

javascript types (number, string, ...) vs. typescript types (any, unknown, ...)

explaining/annotating the type of the variable

underscore separator as commas

don't have to annotate, infer from set value

25:37 any (avoid)

array specify type of array

empty array needs type

code completion from type inference

30:26 tuples

array can have specific set

a tuple is an ordered set of values, fixed length

33:11 enums

enum, list of related constants

using a const enum, makes it more optimized

36:33 functions

tsc can infer function return

tsconfig unused param

functions return undefined if not specified

no unused locals

no implicit return

optional parameter

46:17 objects

read only

48:17

advanced types

eg. unions

type alias - reuse shape

union types, more than one `|` pipe or vertical bar

intersection

use multiple types with `&`

literal type

56:31

nullable types

strict null checks
