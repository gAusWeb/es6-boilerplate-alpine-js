$(document).ready(function () {
  // const loginCartUl = $('.navigation__ul.desktop');
  const accountButtons = $('.navigation-icon.account');
  const accountButtonTexts = $(accountButtons).each((i, el) => $(el).find('.navigation-icon__text'));
  console.log('yo',accountButtonTexts);
  if (accountButtons.length < 1 || accountButtonTexts.length < 1) return;
  return
  const accountButton = accountButtons[0];
//   console.log('firstAccountButton', $(accountButton).text());
//   console.log('firstAccountButton', $(accountButton).find('.navigation-icon__text'));
  if (accountButton.length < 1) return;
  
  const accountButtonText = $(accountButtonTexts).text();
  const originalText = accountButtonText.trim() + '!';
  if (originalText.length < 1) return;

  const words = originalText.split(' ');

  updateButtonText();

  const debouncedResizeHandler = debounce(updateButtonText, 100);
  window.addEventListener("resize", debouncedResizeHandler);

  function updateButtonText() {
    var screenWidth = $(window).width();
    var buttonText = originalText;
    // var _accountButtonTexts = accountButtonTexts;

    
    if (screenWidth < 447) return;
    
    console.log(accountButtonTexts);
    console.log(words);

    if (screenWidth >= 448) {
      if (words.length > 1) {
        const concatName = words[1].length > 6 ? words[1].substring(0, 5) + "...!" : words[1];
        buttonText = 'Hi ' + words[0] + ' ' + concatName;
      } else if (screenWidth < 1280){
        buttonText = originalText.length > 6 ? 'Hi ' + originalText.substring(0, 5) + "...!" : originalText;
      } else {
        buttonText = 'Hi ' + originalText + "!";
      }
    }
    $(accountButtonTexts).each((i, el) => {
        $(el).text(buttonText).removeAttr('style');
        console.log(el)
    });
    // $(accountButtonTexts).each((i, el) => $(el).text(buttonText[1]).removeAttr('style'));
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
});