# Rich-editor

![](https://raw.githubusercontent.com/eggjs/egg/master/docs/assets/egg-logo.png)

A react editor component based on draftjs.

## DEMO

- [Online Demo](https://imshengli.com/rich-editor/)

## Install

```
$ npm install rich-editor --save
```

## Usage

```js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { RichEditor } from 'rich-editor';
class Demo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<RichEditor />);
    }
}
ReactDOM.render(<Demo />, document.getElementById('root'));
```

## License

ISC Licensed

Copyright (c) 2017, ImShengli <mailto:zhangshengli@imshengli.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF

![](https://raw.githubusercontent.com/eggjs/egg/master/docs/assets/egg-logo.png)MERCHANTABILITY AND FITNESS. IN NO E
VENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
