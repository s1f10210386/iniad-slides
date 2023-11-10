document.getElementById('executeButton').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: executeScript
      });
    });
  });
  
  function executeScript() {
      var atag = "punch-viewer-content",
          btag = "-caption",
          ctag = "aria-setsize",
          dtag = "aria-posinset",
          msvg = document.getElementsByTagName("svg"),
          node = document.querySelectorAll('[class$="' + btag + '"]')[0],
          view = document.getElementsByClassName(atag)[0],
          size = node.getAttribute(ctag),
          data = "", func = () => { data += msvg[0].outerHTML; if ((i = node.getAttribute(dtag)) == size) document.write(data); else view.click(), setTimeout(func, 10) };
    func()
  }
  