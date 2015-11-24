      function contains(a, obj) {
        var i = a.length;
        while (i--) {
          if (a[i] === obj) {
            return true;
          }
        }
        return false;
      }

      function loadwordlist(lang) {
        wl = 'js/asp_img_wordlist-' + lang + '.js';
        if (fileadded != wl) {
          var wlsrc = document.createElement('script');
          wlsrc.setAttribute("type","text/javascript");
          wlsrc.setAttribute("src", wl);
//           wlsrc.setAttribute("onload", "quick_api()");
          document.getElementsByTagName("head")[0].appendChild(wlsrc);
          fileadded = wl;
        }
      }

      function img_search(o) {
        var input = window.key_input;
        var output = document.getElementById("output");
        var message = document.getElementById("message");
        var result_array = [];
        var counter = 0;
        var keyword = input.value;
        var lang = "";

        lang_switcher = document.getElementById("lang_switcher");

        input.value = keyword;

        lang = lang_switcher.value;

        if (o) {
          if (o.l) {
            lang = o.l;
	  }
          if (o.k) {
            keyword = o.k;
          }
        }

        loadwordlist(lang);

        input.select();
        window.lang_switcher.value = lang;
        for (var n = 0; n<img_index.length; n++) {
          key_array = img_index[n].k.split(",");
          if (contains(key_array, keyword.toLowerCase())) {
            img_splt = img_index[n].i.split("/");
            img = img_splt[1];
            idx = img_splt[0];
            lic = img_index[n].l.replace(/b/, "CC-BY").replace(/n/, "CC-BY-NC");
            ill = img_index[n].p.replace(/,/g, ", ");
            if (counter % 4 == 0 && counter != 0) {
              result_array.push("        </tr>\n        <tr>\n          <td>\n            <a href=\"https://raw.githubusercontent.com/global-asp/asp-imagebank/master/medium/" + img_index[n].i + ".jpg\"><div data-content=\"Story #" + idx + " | License: " + lic + " | " + ill + "\" class=\"image\"><img src=\"https://raw.githubusercontent.com/global-asp/asp-imagebank/master/medium/" + img_index[n].i + ".jpg\" alt=\"\" /></div></a>" + "\n       </td>");
            } else {
              result_array.push("          <td>\n            <a href=\"https://raw.githubusercontent.com/global-asp/asp-imagebank/master/medium/" + img_index[n].i + ".jpg\"><div data-content=\"Story #" + idx + " | License: " + lic + " | " + ill + "\" class=\"image\"><img src=\"https://raw.githubusercontent.com/global-asp/asp-imagebank/master/medium/" + img_index[n].i + ".jpg\" alt=\"\" /></div></a>" + "\n       </td>");
            }
            counter++;
          }
        }
        if (counter == 0) {
          message.innerHTML = "No results found for \"" + keyword + "\" -- try another keyword!";
        } else {
          message.innerHTML = "Your search for \"" + keyword + "\" returned " + counter.toString() + " results:";
        }
        output.innerHTML = "              <table>\n        <tr>\n" + result_array.join("\n") + "        </tr>\n      </table>";
      }

      function quick_api() {
        var geturl = location.href;
        if (/\?/.test(geturl) == true) {
          if (/\?lang=/.test(geturl) == true) {
            if (/&q=/.test(geturl) == true) {
              lang = /\?lang=([a-z]+)&q=.*/.exec(geturl)[1];
              var args = /\?.*&q=(.*)/.exec(geturl)[1];
              keyword = decodeURI(args);
              loadwordlist(lang);
            } else {
              lang = /\?lang=([a-z]+)/.exec(geturl)[1];
              loadwordlist(lang);
            }
          } else {
            var args = /\?(.*)/.exec(geturl)[1];
            keyword = decodeURI(args);
            loadwordlist(lang);
          }
        } else if (fileadded == "") {
          loadwordlist(lang);
        }
      }

      function page_loaded() {
        window.key_input.focus();
        window.lang_switcher.value = lang;
        if (keyword != "") {
          options = {"l":lang, "k":keyword};
          img_search(options);
        }
      }
