
var myQuote = document.getElementById("myQuote");
var avatar = document.querySelector(".avatar")

var quoteList = [

    {
        quote: "“Be yourself; everyone else is already taken.” ",
        name: "― Oscar Wilde",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1673611182i/3565._UX200_CR0,15,200,200_.jpg"
    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
        name: "― Marilyn Monroe",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1429114964i/9810._UX200_CR0,14,200,200_.jpg"
    },
    {
        quote: " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
        name: " ― Albert Einstein",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1429114964i/9810._UX200_CR0,14,200,200_.jpg"
    },
    {
        quote: "“It does not do to dwell on dreams and forget to live.” ",
        name: "― Mark Twain",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1193930952i/61105._UX200_CR0,30,200,200_.jpg"
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        name: "― Bernard M. Baruch",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg"
    },
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
        name: "― Dr. Seuss",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1605640483i/7715._UX200_CR0,33,200,200_.jpg"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        name: "― Mae West",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1322103868i/1244._UX200_CR0,40,200,200_.jpg"
    },
    {
        quote: "“Be the change that you wish to see in the world.” ",
        name: "― Mahatma Gandhi",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1356810912i/5810891._UX200_CR0,21,200,200_.jpg"
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.” ",
        name: "― Mark Twain",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1651474065i/1938._UX200_CR0,35,200,200_.jpg"
    }, {
        quote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        name: "― Oscar Wilde",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1322675535i/5255891._UX200_CR0,25,200,200_.jpg"
    },
    {
        quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.” ",
        name: "― Mahatma Gandhi",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1424119198i/7617._UX200_CR0,29,200,200_.jpg"
    },
    {
        quote: "“It is better to be hated for what you are than to be loved for what you are not.” ",
        name: "― Andre Gide, Autumn Leaves",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1288560924i/33394.jpg"
    },
]


var unicnum = [];

function getQuote() {

    var randomQuote = Math.floor(Math.random() * quoteList.length);
    var cartona = "";
    cartona = `
    <p class="mb-3"> ${quoteList[randomQuote].quote} </p>
    <p class="fs-2 name "> ${quoteList[randomQuote].name} </p> `

    myQuote.innerHTML = cartona;
    avatar.src = quoteList[randomQuote].img;
    console.log(randomQuote);

}








