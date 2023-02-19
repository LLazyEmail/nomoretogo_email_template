# html-typography-tags

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build html-typography-tags` to build the library.

## Running unit tests

Run `nx test html-typography-tags` to execute the unit tests via [Jest](https://jestjs.io).


- [ ] TODO: To add examples from the past version to the readme 


button.js

div.js

heading-nmtg.js

heading.js

headingOne.js

image.js

imageLink.js

italic.js

link.js

list.js

listItem.js

paragraph.js

strong.js

https://github.com/sindresorhus/create-html-element


```

const paragraphComponent = (params) => {
  if (typeof params != 'object') {
    customError.add('"params" is not "object"');
  }

  if (typeof params.attributes == '') {
    customError.add('empty attributes');
  }

  if (typeof params.content == '') {
    customError.add('empty content');
  }

  const { attributes, content } = params;

  return `<p ${attributes}>${content}</p>`;
};
```

```
const buttonComponent = (params) => {
  const { id, href, text } = params;
  const error = new Errors('contentButton');

  if (id == '') {
    error.add('No id button');
  }
  if (href == '') {
    error.add('No href button');
  }
  if (text == '') {
    error.add('No text button');
  }

  return buttonMainBlock(id, href, text);
};
```

```
export default function (params) {
  const { hrefTitle, idTitle, textTitle } = params;
  const error = new Errors('contentTitleText');

  if (hrefTitle == '') {
    error.add('No hrefTitle');
  }
  if (idTitle == '') {
    error.add('No idTitle');
  }
  if (textTitle == '') {
    error.add('No textTitle');
  }

  return headingMainBlock(hrefTitle, idTitle, textTitle);
}
```

