# Commular

[![NPM Version](http://img.shields.io/npm/v/commular.svg?style=flat)](https://npmjs.org/package/commular)
[![Build Status](http://img.shields.io/travis/commular/commular.svg?style=flat)](https://travis-ci.org/commular/commular)
[![Build status](https://ci.appveyor.com/api/projects/status/pbxtgo7ynu06fxf5?svg=true)](https://ci.appveyor.com/project/tcorral/commular-6641k)


**Commular** is the easiest way to create your CLI tools using plugins.


## Why Commular?

Creating your own command line tool is amazing and gives you the opportunity of explore a new world out of the web.

Sometimes you will encounter some issues on creating those command line tools because the lack of reusability of code that could be reused in each and every one of your tools.

If you are an open source's fan you will also want to share your code with other people so they can also reuse it and take advantage of your work.

Because of all that **Commular** was designed and developed to be a pluggable framework of easy development without having to invent anything new because it extends existing, and very opinionated, CLI frameworks.


### Supported CLI frameworks:: 

* [commander](https://github.com/tj/commander.js/)
* [vorpal](https://github.com/dthree/vorpal)


## Installation

### Dependencies:

* node >= 5.0.0
* npm >= 3.0.0
* commander >= 2.9.0


```bash
npm install commular --save
```


## Quickstart:

1. Use git to clone **Commular** template CLI repo.

```bash
git clone https://github.com/commular/commular-cli-template.git <<CLI_NAME>>
```

3. Use ```npm link``` in the root of your project to work locally.
4. Use ```npm install --save <<COMMULAR_PLUGIN_PACKAGE_NAME>>``` to install plugins.
5. Test your tool and if you are proud of the result publish it to NPM.


## Get started:

**Commular** has been developed on top of:


* [npm](https://github.com/npm/npm)
* [commander](https://github.com/tj/commander.js/)
* [vorpal](https://github.com/dthree/vorpal)

> You can use *commmander* or *vorpal* with *Commular*.

### Create your CLI tool in less than 2 minutes:
1. Use git to clone **Commular** repo.

```bash
git clone https://github.com/commular/commular.git <<CLI_NAME>>
```

2. Edit package.json and remove all those dependencies that are not required.
3. Use ```npm link``` in the root of your project to work locally.
4. Use ```npm install --save <<COMMULAR_PLUGIN_PACKAGE_NAME>>``` to install plugins.
5. Test your tool and if you are proud of the result publish it to NPM.


### How can I tell **Commular** what CLI framework I am gonna use?

It can't be easier... just use npm to install *commander* or *vorpal* and **Commular** will check what module you installed.

```bash
npm install --save commander
```

```bash
npm install --save vorpal
```

### How I can add one or more plugins?

Use npm to install all the plugins you need **Commular** will manage them for you.

#### Community plugins:
We work as other pluggable tools (Grunt, Gulp...)

You can find all the plugins reviewed by our team in **Commular** [organization](https://github.com/commular)

You can also could find third party plugins in Github, Bitbucket and NPM, to find them you only have to search for:

```
commular-
```

### That sounds good but what if I want or need to create my own plugins.
You can develop your own plugins you only need to follow some [simple steps](https://commular.github.io/training).

**Commular** as Grunt, Gulp or jQuery enforce you to use our prefix, **commular**, to name your plugins but we also
understand that sometimes it's not possible so we also though on it and you can define what prefixes want
**Commular** to manage.


> By default **Commular** manages those plugins that are prefixed by **commular** and also those that are prefixed with the same name of your CLI.


#### Example

Imagine that you have to create your own CLI, named **biz** and...

* You have created two plugins with your own prefix.
    * biz-create-component
    * biz-transpile
* You need a plugin created in your same company but that was developed by R&D.
    * rd-linter
* You have found one plugin hosted by us.
    * commular-xml-to-json
* You have found one plugin from a third party company.
    * twitter-compile-handlebars

**That's what you need to do to use them all in your app is:**

1. Edit package.json file and add a new property:

```
    "commular-plugin-prefixes": []
```
2. Add the prefix of the R&D department

```
    "commular-plugin-prefixes": "rd"
```
3. Add the prefix of Twitter company

```
    "commular-plugin-prefixes": [ "rd", "twitter" ]
```

To get more information we recommend you:

* Follow our [training](https://commular.github.io/training).
* Read the use cases in tests.
    * [commular tests](https://github.com/commular/commular/blob/master/test/commular_test.js)
    * [commular-bb-generate tests](https://github.com/commular/commular-bb-generate/blob/master/test/commular-bb-generate_test.js)


## How to develop my own plugins?

### Develop your own plugins for **Commander** is as easy as follow the next steps:

1. Clone the plugin template repository.

```bash
git clone https://github.com/commular/commular-plugin-template.git [YOUR_PLUGIN_NAME]
```

2. Open ```scripts/index.js``` and see that there is only the following code:

```js
exports.command = function (program) {
    /**
     * "program" returns an instance of "commander" or "vorpal".
     * Develop your command/s in this function as usual.
     * More information about how to do that in the website of the CLI framework
     * you decided to use.
    **/
};
```

3. Read and remove that comment and implement your command or commands in there.
4. Install all the dependencies you need.
5. Test your plugin.
    * The template also gives you all the ecosystem to test your plugins easily but we don't have
to recall you that it's just a template so it's up to you if you want to change the modules used in there.

    > If you want us to review your **commular** plugin we will ask you for testing.
    > We will not accept any plugin without the required testing.


### Good, but what if you don't want or can not publish it in NPM, Github...

That's not a problem at all because we are using NPM to manage dependencies.

#### Example of developing using local plugins:

Assumptions:
- The tool's name, you are developing, is 'cli'.
- You are creating a 'plugins' folder in the root of your tool.
- The name of your plugin is 'commular-parse-xml'

1. Open your 'cli' root folder
2. Create 'plugins' folder in the root of your 'cli' folder
3. Copy or move 'commular-parse-xml' folder inside of 'plugins'
4. Use npm to install it locally.

```bash
npm install --save ./plugins/commular-parse-xml
```

5. Use ```npm link``` to work with your 'cli' tool as if it was installed globally.
6. Test your plugin and enjoy it, once you have it finished you can publish or share it with others.

## Available Commular plugins:

* [commular-test](https://www.npmjs.com/package/commular-test)
* [commular-bb-generate](https://www.npmjs.com/package/commular-bb-generate)

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

* 0.4.1 - Fixes on vorpal support.
* 0.4.0 - Added support for Vorpal CLI Framework.
* 0.3.6 - Tested in Windows/Linux/OSX.
* 0.3.4 - Stable version.
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
