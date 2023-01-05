https://www.devextent.com/import-es-modules-in-nodejs-with-typescript-and-babel/



https://cameronnokes.com/blog/the-30-second-guide-to-publishing-a-typescript-package-to-npm/
https://www.codementor.io/@dhananjaykumar/build-and-publish-an-npm-typescript-package-1jklrmbf2g



https://medium.com/nerd-for-tech/testing-typescript-with-jest-290eaee9479d


---

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


---



https://github.com/sindresorhus/create-html-element



https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/sub-modules/typography/src/components/button.js


https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/sub-modules/typography/package.json

================

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


heading
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

