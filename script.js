const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function mousefollower(){
    window.addEventListener("mousemove", function(dets) {
        document.querySelector("#minicircle").style.transform =`translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
    mousefollower();