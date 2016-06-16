# Commular

[![NPM Version](http://img.shields.io/npm/v/commular.svg?style=flat)](https://npmjs.org/package/commular)
[![Build Status](http://img.shields.io/travis/commular/commular.svg?style=flat)](https://travis-ci.org/commular/commular)
[![Build status](https://ci.appveyor.com/api/projects/status/pbxtgo7ynu06fxf5?svg=true)](https://ci.appveyor.com/project/tcorral/commular-6641k)



**Commular** is the first modular solution to create command line tools enforcing the reusability of the code.

## Why Commular?

Creating your own command line tool is amazing and can give your the opportunity of explore a new world out of the web but
some times you will encounter some issues on creating this command line tools because the lack of reusability of that code
that could be reused in each and every one of your tools and also the problem on sharing that code with others so that other 
people can have the opportunity of taking advantage of my work.
Because of all that **Commular** was designed and developed to to implement a pluggable system of easy development 
without having to invent anything; it's based on [commander](https://github.com/tj/commander.js/) new increasing productivity and code reusability. 

## Installation

### Dependencies:

* node >= 5.0.0
* npm >= 3.0.0
* commander >= 2.9.0


```bash
npm install commular --save
```

## How it works?
**Commular** has been developed on top of:
* [commander](https://github.com/tj/commander.js/)
* [npm](https://github.com/npm/npm)

**Commular** only requires from you to install all those modules that will compose your command line tool 
using npm then **Commular** will read all those modules and create a single tool with all the commands on it.

**Commular** uses two different ways to decide what modules it will gonna use:
1. Reads the property "modules-prefixes" from package.json.
    a. It can be:
        i. String
        ii. Array
2. If "modules-prefixes" doesn't exist it will read the property "name" from package.json.

> Commular has been designed to be very easy to extend and with the "modules-prefixes" feature you can add your 
> own modules and also reuse third party modules but for the sake of the community we enforce you to use those created 
> by the community or even better we want you to create your own packages so that others can enjoy your work.

This method allows you to create your own modules but also reuse third party modules in your command line tool.

## Module Development:
Create a module that can be used in **Commander** is as easy as following the next steps:

1. Create a module that should accomplish the following naming convention:
    a. ```MMMMM-XXXX``` where the ```MMMMM``` is the prefix of the module and ```XXX``` is the feature that will be added to your command line.
    > "commular" is the main prefix for those modules created by the community.
2. Create your main Javascript file with the following pattern:

```js
exports.command = function(program) {
  // example code - start -
  program
    .command('setup [env]')
    .description('run setup commands for all envs')
    .option("-s, --setup_mode [mode]", "Which setup mode to use")
    .action(function(env, options){
      var mode = options.setup_mode || "normal";
      env = env || 'all';
      console.log('setup for %s env(s) with %s mode', env, mode);
    });
  // example code - end -
};
```
3. Install this package in your tool using npm.
4. **Commular** will manage it for you.
5. Enjoy your first modular command line tool.

## Modules:
* [commular-test](https://github.com/tcorral/commular-test)
* [commular-bb-generate](https://github.com/tcorral/commular-bb-generate)

## Usage in your tool:

To use it in your command line you only need to:

1. Create your project folder.
2. Create the package.json file.

```
npm init
```

3. Install **Commular** locally.

```bash
npm install commander --save
```

4. Create a bin folder in the root of your project folder.
5. Create a index.js file in the bin folder with the following code:

```js
#!/usr/bin/env node
var commular = require('commular');
commular();
```

6. Add the bin property to your package.json.

```
  "bin": "./bin/index.js"
```

To get more information I recommend to read the use cases in tests.

## Tests

To run the tests:

```bash
npm install
npm test
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Check that it still works: `npm test`
6. Push to the branch: `git push origin my-new-feature`
7. Submit a pull request :D

## History

* 0.3.6 - Tested in Windows/Linux/OSX
* 0.3.4 - Stable version
* 0.2.0 - First release.

## License

The MIT License (MIT)

Copyright (c) 2016 Tomás Corral

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
