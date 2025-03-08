function openUrl(url, title) {
    title = title || 'auth'
    var w = 500, h = 600
    var screenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
    var screenTop = window.screenTop !== undefined ? window.screenTop : screen.top

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

    var left = ((width / 2) - (w / 2)) + screenLeft
    var top = ((height / 2) - (h / 2)) + screenTop
    var newWindow = window.open(url, title, 'toolbar=no,location=no,status=yes,resizable=yes,scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)

    if (window.focus) {
        newWindow.focus()
    }
}

window.addEventListener('message', function (event) {
    if (typeof event.data === 'string' && ~event.data.indexOf('FlespiToken')) {
        var div = event.data
        let partToken = div.split(" ")
        let partAfterSpace = partToken[1];

        if (div) {
            // function redirectToHomePage() {
            // window.location.href = "http://127.0.0.1:5500/template/index.html"; // استبدل بالعنوان الصحيح
            console.log(partAfterSpace);

            const apiToken = div; // استبدل بـ API Token الخاص بك
            const url = 'https://flespi.io/gw/devices/all';

            fetch(url, {
                headers: {
                    'Authorization': `${apiToken}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data); // هنا يمكنك التعامل مع البيانات المستلمة
                    // مثلاً: عرضها في صفحة HTML، تخزينها في متغير، إلخ
                })
                .catch(error => {
                    console.error('Error:', error);
                });

            // }

            // تحقق بشكل دوري إذا كان المستخدم قد سجل الدخول
            // setInterval(() => {

            //     redirectToHomePage();

            // }, 1000);
        }

        // div.innerHTML = event.data;
        // document.querySelector('#tokens').appendChild(div);
    }
})

var req = new XMLHttpRequest()
req.open('GET', 'https://flespi.io/auth/oauth/providers', true);
req.onreadystatechange = function () {
    if (req.readyState == 4) {
        if (req.status == 200) {
            var response = JSON.parse(req.responseText)
            // Object.keys(response.result[0]).forEach(function (key, index) {
            //     var div = document.createElement('div');
            //     div.innerHTML = key;
            //     div.className = 'button';
            //     div.onclick = function (e) {
            //         openUrl(response.result[0][key])
            //     };
            //     document.body.appendChild(div);
            // });
            // var div = document.createElement('div');
            // div.innerHTML = 'email';
            // div.className = 'button';
            // div.onclick = function (e) {
            //     openUrl('https://flespi.io/#/login/')
            // };
            // document.body.appendChild(div);
            console.log(response)
        }
    }
};
req.send(null);