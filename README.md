# VAMTIGER Get Local Stylesheet Paths
[VAMTIGER VAMTIGER Get Local Stylesheet Paths](https://github.com/vamtiger-project/vamtiger-get-local-stylesheet-paths) will return a list of local stylesheet paths for defined HTML document text.

## Installation
[VAMTIGER VAMTIGER Get Local Stylesheet Paths](https://github.com/vamtiger-project/vamtiger-get-local-stylesheet-paths) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-get-local-stylesheet-paths
```
or
```bash
yarn add vamtiger-get-local-stylesheet-paths
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER VAMTIGER Get Local Stylesheet Paths](https://github.com/vamtiger-project/vamtiger-get-local-stylesheet-paths):
```javascript
import getLocalStylesheetPaths from 'vamtiger-get-local-stylesheet-paths';
```
or
```javascript
const getLocalStylesheetPaths = require('vamtiger-get-local-stylesheet-paths').default;
```

[VAMTIGER VAMTIGER Get Local Stylesheet Paths](https://github.com/vamtiger-project/vamtiger-get-local-stylesheet-paths) will return a list of local stylesheet paths for defined HTML document text.
```javascript
const getLocalStylesheetPaths = require('vamtiger-get-local-stylesheet-paths').default

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        Some HTML Title
    </title>
    <link href="https://remote/stylesheet/link/index.css" rel="stylesheet">
    <link href="local/stylesheet/link/index.css" rel="stylesheet">
</head>
<body>
    <div>
        Some HTML body inner HTML
    </div>
</body>
</html>
`;
const localStylesheetLinks = getLocalStylesheetPaths({ html })
    // .then(handleResult)
    // .catch(handleError); 
/* [
'local/stylesheet/link/index.css'
] */
```

[VAMTIGER VAMTIGER Get Local Stylesheet Paths](https://github.com/vamtiger-project/vamtiger-get-local-stylesheet-paths) can also be more conveniently referenced inside an async function.
```javascript
const getLocalStylesheetPaths = require('vamtiger-get-local-stylesheet-paths').default

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        Some HTML Title
    </title>
    <link href="https://remote/stylesheet/link/index.css" rel="stylesheet">
    <link href="local/stylesheet/link/index.css" rel="stylesheet">
</head>
<body>
    <div>
        Some HTML body inner HTML
    </div>
</body>
</html>
`;

async function someAsyncFunction() {
    const localStylesheetLinks = await getLocalStylesheetPaths({ html });
/* [
'local/stylesheet/link/index.css'
] */
}
```