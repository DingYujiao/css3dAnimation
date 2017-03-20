(function() {
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function() {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 19.2 + 'px';
    };
    
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
    if(document.documentElement.clientWidth<1000) {
        document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=' + parseFloat(1 / window.devicePixelRatio).toFixed(3) + ', user-scalable=no');
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 19.2 + 'px';
    }
    
})();
