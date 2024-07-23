import { CustomHTMLRenderer } from '@toast-ui/editor';
import katex from 'katex'

const renderLatexBlock = (markdown: string) => {
    const regex = /\$\$latex\n([\s\S]*?)\n\$\$/g;
    // console.log("markdown : " + markdown)
    return markdown.replace(regex, (_, equation) => {
      try {
        return katex.renderToString(equation, { throwOnError: false });
      } catch (error) {
        console.error('Error rendering LaTeX:', error);
        return '<div>Error rendering LaTeX</div>';
      }
    });
  };

// const renderLatexInline = (markdown: string) => {
//     const regex = /\$katex([\s\S]*?)\$/g;
//     // console.log("markdown : " + markdown)
//     return markdown.replace(regex, (_, equation) => {
//       try {
//         return katex.renderToString(equation, { throwOnError: false });
//       } catch (error) {
//         console.error('Error rendering LaTeX:', error);
//         return '<div>Error rendering LaTeX</div>';
//       }
//     });
//   };

export const renderLatexAll = (markdown: string) =>{
    return renderLatexBlock(markdown)
}