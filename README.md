[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/LLazyEmail/nomoretogo_email_template)

# nomoretogo_email_template

typography: 
- html-typography-tags
- nmtg-template-mailerlite-typography

- nmtg-template-mailerlite-outertemplate

- nmtg-template-layout-weekly

- nmtg-template-mailerlite-inner

- nmtg-template-display



yarn nx g @nrwl/js:lib layout-content

https://nx.dev/getting-started/integrated-repo-tutorial


https://www.youtube.com/watch?v=-OmQ-PaSY5M&ab_channel=Nx-Smart%2CFast%2CExtensible

https://stackblitz.com/edit/typescript-qzlpln?file=index.ts

`yarn test:write` for testing how template is generating right now

template from:
https://github.com/LLazyEmail/free-email-templates-to-try/blob/main/01%20Food%20%26%20Recipes/nmgt/Korean%20Barbecue%20Beef%20_%20Pork%20Schnitzel%20_%20Bahn%20Mi%20Meatball%20Skewers.html


project structure will be similar to: https://github.com/LLazyEmail/_trying-lit/blob/main/components/Typography/src/templates/image.js


delete this module later
- nmtg-template-mailerlite-outertemplate
- nmtg-template-mailerlite-inner


*Sadly, in order to speed up process, we removed tests + Jest, Display class, Error class and component Universal class*

I removed factory class, component universal and errors class from some of our packages in order to avoid errors from our new setup


### Examples of source.md files
- https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/data/source.md
- https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/data/source-wrapped-recipes.md
- https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/data/source-front-matter.md


## TODO
- [ ] Add validator for error messages and passed parameters 

---

https://www.nomoretogo.com/weekly-menu/

---

### static images

https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/twitter.webp
https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/amazon.png
https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/facebook.webp
https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/instagram.webp
https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/logo.jpeg
https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe1.jpeg
https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe2.jpeg
https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe3.jpeg
https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe4.jpeg
https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe5.jpeg
https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe6.jpeg

---





```bash
├── xxx
│   ├── xxx
│   │   ├── **/*.xxx
│   ├── xxx
│   ├── images
│   ├── xxx
│   ├── js
│   │   ├── **/*.js
│   └── xxx
├── dist (or build)
├──
├── components
│   ├── innerTemplate (not working)
│   │   ├── src
│   │       ├── components/contentMainTableWrap.js
│   │       ├── index.te-st.js
│   ├── miscellaneous
│   │   ├── src
│   │       ├── components/address.js
│   │       ├── components/social-media.js
│   │       ├── components/unsubscribe-link.js
│   │       ├── components/view-in-browser-link.js
│   ├── outerTemplate-partially-works
│   │   ├── src
│   │       ├── components
│   │       ├── test
│   │       ├── index.te-st.js
│   ├── typography
│   │   ├── src
│   │       ├── components/headings.js
│   │       ├── components/paragraph.js
│   │       ├── components/strong.js
│   │       ├── index.js
│   │   ├── test
│   │       ├──index.te-st.js
│   └── config.js
├── data
│   ├── images
│   └── startTemplate.html
├── src
│   ├── components
│   ├── display
│   │       ├── displayAfterSupportComponent.js
│   │       ├── displayBodyComponent.js
│   │       ├── displayContent.js
│   │       ├── displayContentMainTableWrap.js
│   │       ├── displayFooter.js
│   │       ├── displayHead.js
│   │       ├── displayInstruction.js
│   │       ├── displaySupportContact.js
│   │       ├── old_displayBody.js
│   │       ├── old_displayEmptyTemplate.js
│   │       ├── old_displayFooter.js
│   │       ├── old_displayMain.js
│   ├── domain
│   ├── config.js
│   └── index.js
├── test
│   └── index.test.js
├── README.md
├── package.json
├──
└── .gitignore
```

```bash
├── headComponent
│   ├── subheadComponents (import)
│       ├── blobHead (import)
│       ├── bodyStyle (import)
│       ├── font1 (import)
│       ├── font2 (import)
│       ├── headMeteTags (import)
│       ├── ifstyle (import)
│       ├── mediaStyle(import)
│       ├── style(import)
│       └──  style2(import)
├── bodyComponent
│   ├── contentMainTableWrap (import)
│       ├── topPanelViewinBrows (import)
│       │   ├── viewinBrowserLink (import)
│       ├── tableHeaderBlockLogo (import)
│   ├── contentComponent (import)
│       ├── titleText (inline)
│       ├── subTitleText (inline)
│       ├── textDescription (inline)
│       ├── tableWitchTwoRecipes (import)
│           ├── recipeComponent (import)
│               ├── titleComponent (inline)
│               ├── textComponent (inline)
│               ├── imageComponent (inline)
│       ├── buttonBlock (inline)
│       ├── emptyBlock (import)
│   ├── instructionComponent (import)
│       ├── createtitle (inline)
│       ├── createtext (inline)
│   ├── supportContact (import)
│       ├── createSupportLink (inline)
│       ├── createSupportTitle (inline)
│       ├── createSupportTextTop (inline)
│       ├── createSupportMail (inline)
│       ├── createSupportBottom (inline)
│       ├── emptyBlock (import)
│   ├── afretSupportContact (import)
│       ├── createImage (inline)
│       ├── emptyBlock (import)
│   ├── footerComponent (import)
│       ├── address (inline)
│       ├── discription (inline)
│       ├── createUnsubscribe (inline)
│       ├── createSocialPanel (import)
```
---


```
// import { BodyHTMLString } from '../src/display/displayBody';
// import ContentHTMLString from '../src/display/displayContent';
// import { FooterHTMLString } from '../src/display/displayFooter';
// import HeadHTMLString from '../src/display/displayHead';
// import { MainHTMLString } from '../src/display/displayMain';


// describe('all display methods must be initialized', () => {
//     // test('display body', () => {
//     //   expect(BodyHTMLString === true).toBe(true);
//     // });
  
//     test('display body', () => {
//       expect(typeof BodyHTMLString === 'string').toBe(true);
//     });

// });
```

#### Arthur Tkachenko articles

* [https://hackernoon.com/5-reasons-why-newsletters-should-be-part-of-your-business-strategy](https://hackernoon.com/5-reasons-why-newsletters-should-be-part-of-your-business-strategy)
* [https://hackernoon.com/organizing-an-advanced-structure-for-html-email-template](https://hackernoon.com/organizing-an-advanced-structure-for-html-email-template)
* [https://hackernoon.com/how-i-started-to-build-react-components-for-email-templates](https://hackernoon.com/how-i-started-to-build-react-components-for-email-templates)
* [https://hackernoon.com/introducing-a-simple-npm-module-with-email-templates](https://hackernoon.com/introducing-a-simple-npm-module-with-email-templates)
* [https://hackernoon.com/glossary-for-non-technies](https://hackernoon.com/glossary-for-non-technies)
* [https://hackernoon.com/email-marketing-and-how-to-curate-an-effective-business-newsletter](https://hackernoon.com/email-marketing-and-how-to-curate-an-effective-business-newsletter)
* [https://hackernoon.com/exploring-substack-for-building-your-newsletter](https://hackernoon.com/exploring-substack-for-building-your-newsletter)
* [https://hackernoon.com/building-a-design-system-for-email-templates-react](https://hackernoon.com/building-a-design-system-for-email-templates-react)
* [https://hackernoon.com/together4victory-list-of-email-marketing-tools](https://hackernoon.com/together4victory-list-of-email-marketing-tools)
* [https://hackernoon.com/cool-newsletters-for-developers-part-1](https://hackernoon.com/cool-newsletters-for-developers-part-1)
* [https://hackernoon.com/cool-resources-for-sending-emails](https://hackernoon.com/cool-resources-for-sending-emails)
* [https://hackernoon.com/businesses-have-messy-emails](https://hackernoon.com/businesses-have-messy-emails)
* [https://hackernoon.com/businesses-have-messy-emails-the-relationship-between-security-and-sales](https://hackernoon.com/businesses-have-messy-emails-the-relationship-between-security-and-sales)


## [Linkedin page of LLazyEmail](https://www.linkedin.com/company/llazyemail/)
