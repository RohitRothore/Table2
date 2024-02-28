
export const printById = () => {
  const printWindow = window.open('', '_blank');
  printWindow.document.write('<html><head><title>Print</title></head><body>');
  const styles = Array.from(document.styleSheets)
      .map((styleSheet) => {
          try {
              return Array.from(styleSheet.cssRules)
                  .map((cssRule) => {
                      if (cssRule instanceof CSSStyleRule && document.querySelector(cssRule.selectorText)) {
                          return cssRule.cssText;
                      }
                      return '';
                  })
                  .join('\n');
          } catch (e) {
              console.log('Error:', e);
              return '';
          }
      })
      .join('\n');
  printWindow.document.write(`<style>${styles}</style>`);
  printWindow.document.write('<div>');
  const sectionToPrint = document.getElementById('1');
  if (sectionToPrint) {
      printWindow.document.write(sectionToPrint.outerHTML);
  }
  printWindow.document.write('</div></body></html>');
  printWindow.document.close();
  printWindow.print();
  setTimeout(() => {
      printWindow.close();
  }, 200); 
};

//Callback Function..
// const handlePrint = () => {
//     printById()
//   };