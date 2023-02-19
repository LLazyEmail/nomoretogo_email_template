// export * from './lib/write';
// headHTMLString,
// contentHTMLString,    
// BodyHTMLString,
// footerHTMLString,
// MainHTMLTemplate,
import headFlag from './00_head';
import footerFlag from './01_footer';
import bodyFlag from './02_body';
import contentFlag from './03_content';
import recipesFlag from './04_recipes';
import mainFlag from './05_main';

// depends on what we are calling in CLI - we need to be able to run a separate sets of methods

export default {
  headFlag,
  footerFlag,
  bodyFlag,
  contentFlag,
  recipesFlag,
  mainFlag
}
