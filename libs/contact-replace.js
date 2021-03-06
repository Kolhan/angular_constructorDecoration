(function($) {
    $.fn.changeData = function(options) {
        var settings = {
            urlParam: null,
            nameCookie: null,
            paramList: null,
            newData: null
        };

        return this.each(function() {
            if (options) {
                $.extend(settings, options);
            }

            function getCookie(name) {
                var cookie = " " + document.cookie;
                var search = " " + name + "=";
                var setStr = null;
                var offset = 0;
                var end = 0;
                if (cookie.length > 0) {
                    offset = cookie.indexOf(search);
                    if (offset != -1) {
                        offset += search.length;
                        end = cookie.indexOf(";", offset);
                        if (end == -1) {
                            end = cookie.length;
                        }
                        setStr = unescape(cookie.substring(offset, end));
                    }
                }
                return(setStr);
            }

            function setCookie(name, valCookie) {
                document.cookie = name+"=; expires=; path=/";
                expires = new Date();
                expires.setTime(expires.getTime() + 622229959999);
                document.cookie = name+"=" + valCookie + "; expires=" + expires.toGMTString() + "; path=/"
            }

            function parseGetParams(peremennya) {
                var getURl = window.location.search.substring(1);
                var peremennii = getURl.split("&");
                for (var i=0; i<peremennii.length; i++) {
                    var pair = peremennii[i].split("=");
                    if (pair[0] == peremennya) {
                        return pair[1];
                    }
                }
                return(false);
            }

            var param = parseGetParams(settings.urlParam);

            if (settings.paramList.indexOf(param)!=-1) {
                setCookie(settings.nameCookie, param);
            }
            var param_cookie = getCookie(settings.nameCookie);
            for(var i=0; i<settings.paramList.length; i++){
                if ((param_cookie == settings.paramList[i]) || (param == settings.paramList[i])) {
                    $(this).text(settings.newData[i]);
                }
            }
        })
    };
})(jQuery);

$(function() {
     $('#phones').changeData({
         urlParam: 'utm_source',
         nameCookie: 'utm_source_change',
         paramList: [
             'real',
             'idrealty',
			 'mk',
			 'td',
			 'arin'
         ],
         newData: [
             '+7 (812) 579-99-07, +7 (812) 331-32-48',
			 '+7 (812) 922-20-15',
             '+7 (812) 454-04-30',
			 '+7 (812) 924 00 26',
			 '+7 (812) 507-68-19'
         ]
     });
});
$(function() {
     $('#mailto').changeData({
         urlParam: 'utm_source',
         nameCookie: 'utm_source_change',
         paramList: [
             'real',
             'idrealty',
			 'mk',
			 'td',
			 'arin'
         ],
         newData: [
             'realvl@realag.ru',
             '+7 (812) 922-20-15',
			 '+7 (812) 454-04-30',
			 '+7 (812) 924 00 26',
			 '+7 (812) 507-68-19'
         ]
     });
});