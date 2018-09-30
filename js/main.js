// class Sticky {
//     constructor(selector, n) {
//         this.elements = $(selector)
//         this.offset = n
//     }
// }


// var sticky = new Sticky(selector, n)

var buttonOffset = $('button').offset() //获取的[第一个元素]的[当前坐标]，[坐标相对于文档]

$(window).on('scroll', function () {
    var scrollY = window.scrollY  //是[文档]从[顶部]开始滚动过的像素值
    if (scrollY > 0) {
        $('#topbar').addClass('sticky')
    } else {
        $('#topbar').removeClass('sticky')
    }
    if (scrollY + 60 > buttonOffset.top) {
        $('button').addClass('sticky')
    } else {
        $('button').removeClass('sticky')
    }
})

