const offset = 80
const N = 150
const S = 650
const E = 650
const W = 150

const small = 7

let runs = [
    {
        fire1: '.fireNW',
        fire2: '.fireNE',
        t1: [400,490],
        h1: [W-offset,S+offset],
        m1: [W+offset,S-offset],
        r1: [W+offset,S+offset],
        t2: [400,600],
        h2: [E+offset,S+offset],
        m2: [E-offset,S-offset],
        r2: [E+offset,S-offset],
    },
    {
        fire1: '.fireNE',
        fire2: '.fireSE',
        t1: [310,400],
        h1: [W-offset,N-offset],
        m1: [W+offset,N+offset],
        r1: [W-offset,N+offset],
        t2: [200,400],
        h2: [W-offset,S+offset],
        m2: [W+offset,S-offset],
        r2: [W+offset,S+offset],
    },
    {
        fire1: '.fireSE',
        fire2: '.fireSW',
        t1: [400,310],
        h1: [W-offset,N-offset],
        m1: [W+offset,N+offset],
        r1: [W-offset,N+offset],
        t2: [400,200],
        h2: [E+offset,N-offset],
        m2: [E-offset,N+offset],
        r2: [E-offset,N-offset],
    },
    {
        fire1: '.fireNW',
        fire2: '.fireSW',
        t1: [490,400],
        h1: [E+offset,N-offset],
        m1: [E-offset,N+offset],
        r1: [E-offset,N-offset],
        t2: [600,400],
        h2: [E+offset,S+offset],
        m2: [E-offset,S-offset],
        r2: [E+offset,S-offset],
    },

    {
        fire1: '.fireNW',
        fire2: '.fireSE',
        t1: [W-offset,S-offset],
        h1: [W-offset,S+offset],
        m1: [W+offset,S-offset],
        r1: [W+offset,S+offset],
        t2: [E+offset,N+offset],
        h2: [E+offset,N-offset],
        m2: [E-offset,N+offset],
        r2: [E-offset,N-offset],
    },
    {
        fire1: '.fireNE',
        fire2: '.fireSW',
        t1: [W+offset,N-offset],
        h1: [W-offset,N-offset],
        m1: [W+offset,N+offset],
        r1: [W-offset,N+offset],
        t2: [E-offset,S+offset],
        h2: [E+offset,S+offset],
        m2: [E-offset,S-offset],
        r2: [E+offset,S-offset],
    },
];

let rand = 0;
let cast = 'OCTAFLARE'

$( document ).ready(function() {
    $('.next').click(function() {
        $('.fire').hide()
        $('.player').hide()
        rand = (Math.random()*runs.length << 0)
        cast = Math.random() < .5 ? 'OCTAFLARE' : 'TETRAFLARE'
        $('.cast').text(cast)

        $('.fire').css('width',200)
        $('.fire').css('height',200)
        $('.fire').css('background-color','rgba(255, 0, 0, 0.466)')
        $(runs[rand].fire1).toggle();
        $(runs[rand].fire2).toggle();

        $('button').toggle()
    })

    $('.answer').click(function() {

        if (cast == 'OCTAFLARE') {
            $('.t1').css('left', runs[rand].t1[0])
            $('.t1').css('top', runs[rand].t1[1])
            $('.h1').css('left', runs[rand].h1[0])
            $('.h1').css('top', runs[rand].h1[1])
            $('.t2').css('left', runs[rand].t2[0])
            $('.t2').css('top', runs[rand].t2[1])
            $('.h2').css('left', runs[rand].h2[0])
            $('.h2').css('top', runs[rand].h2[1])
        } else {
            $('.t1').css('left', runs[rand].m1[0] + small)
            $('.t1').css('top', runs[rand].m1[1] + small)
            $('.h1').css('left', runs[rand].r1[0] + small)
            $('.h1').css('top', runs[rand].r1[1] + small)
            $('.t2').css('left', runs[rand].m2[0] + small)
            $('.t2').css('top', runs[rand].m2[1] + small)
            $('.h2').css('left', runs[rand].r2[0] + small)
            $('.h2').css('top', runs[rand].r2[1] + small)
        }



        $('.m1').css('left', runs[rand].m1[0])
        $('.m1').css('top', runs[rand].m1[1])
        $('.r1').css('left', runs[rand].r1[0])
        $('.r1').css('top', runs[rand].r1[1])
        $('.m2').css('left', runs[rand].m2[0])
        $('.m2').css('top', runs[rand].m2[1])
        $('.r2').css('left', runs[rand].r2[0])
        $('.r2').css('top', runs[rand].r2[1])
        $('.player').show()

        $('.fire').css('width',680)
        $('.fire').css('height',680)
        $('.fire').css('background-color','rgba(255, 145, 0, 0.466)')

        $('button').toggle()
    })
});
