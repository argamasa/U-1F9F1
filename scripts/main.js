$(function(){
  var contenedor = $('#lista_noticias');
  var noticias = {
    "lista" : [
      {
        "id" : "1",
        "titulo" : "There will come soft rains",
        "url" : "https://socratessculpturepark.org/artist/maximilian-goldfarb/",
      },
      {
        "id" : "2",
        "titulo" : "loose and tight",
        "url" : "https://www.instagram.com/p/B65RM2MABCM/media/?size=l",
      },
      {
        "id" : "3",
        "titulo" : "Motion With",
        "url" : "https://miergallery.com/kilian-ruthemann-motion-december-10-2016-march-31-2017/",
      },
      {
        "id" : "4",
        "titulo" : "best gift ever",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/5493013/large_04e42d250478cb3faef2d3fb0c7cf411.jpg?1573704171?bc=0",
      },
      {
        "id" : "5",
        "titulo" : "museodelladrillo",
        "url" : "http://www.museodelladrillo.com.ar/",
      },
      {
        "id" : "6",
        "titulo" : "mma",
        "url" : "https://ia802304.us.archive.org/26/items/mma_brick_51992/51992.jpg",
      },
      {
        "id" : "7",
        "titulo" : "How to Build a Digital Brick Wall",
        "url" : "http://www.allanwexlerstudio.com/projects/how-build-digital-brick-wall-2009",
      },
      {
        "id" : "8",
        "titulo" : "cgtrader",
        "url" : "https://www.cgtrader.com/3d-models?keywords=brick",
      },
      {
        "id" : "9",
        "titulo" : "ID",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/577308/large_28e296d262aaa59edec91ca9aa84bf2d?1459136112?bc=1",
      },
      {
        "id" : "10",
        "titulo" : "HANDSOME RUGGED STRONG",
        "url" : "https://www.youtube.com/embed/videoseries?list=UUL3mMf7IqLRW0XUQ6t8SHHg&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "11",
        "titulo" : "Sketchup Making Of",
        "url" : "https://www.youtube.com/embed/gAp_4FooKCg?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "12",
        "titulo" : "zonder titel",
        "url" : "https://www.youtube.com/embed/l4LYsJ7aQd4?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "13",
        "titulo" : "AEI",
        "url" : "https://www.instagram.com/p/B5DcU60KKbX/media/?size=l",
      },
      {
        "id" : "14",
        "titulo" : "Experiment Goes Wrong",
        "url" : "https://www.youtube.com/embed/5ufpmicEZI0?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "15",
        "titulo" : "As Seen On TV",
        "url" : "https://www.mirror.co.uk/news/world-news/monkeys-kill-man-tree-bricks-13448752",
      },
      {
        "id" : "16",
        "titulo" : "Man, 72",
        "url" : "https://www.wikihow.com/Make-Bricks-from-Concrete",
      },
      {
        "id" : "17",
        "titulo" : "Ciudad de ladrillos",
        "url" : "https://www.youtube.com/embed/e3sOoQ6EqSo?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "18",
        "titulo" : "1/1/1970",
        "url" : "https://www.youtube.com/embed/MVI87HzfskQ?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "19",
        "titulo" : "sofas",
        "url" : "http://www.rodneyharris.co.uk/sofas.php",
      },
      {
        "id" : "20",
        "titulo" : "Silly Symphony",
        "url" : "https://www.youtube.com/watch?v=B-x_QRww3Bk",
      },
      {
        "id" : "21",
        "titulo" : "Home Palace",
        "url" : "https://larisasitar.squarespace.com/home-palace/puqpng8gqdtpljik2tyqgqth8a2tb8",
      },
      {
        "id" : "22",
        "titulo" : "it’s ok",
        "url" : "https://www.youtube.com/embed/qUixzj3x0IU?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "23",
        "titulo" : "megapromo",
        "url" : "https://www.instagram.com/p/B7D4KtmBwM-/media/?size=l",
      },
      
      {
        "id" : "24",
        "titulo" : "heavy sleep",
        "url" : "https://www.fieldcandy.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/a/base_image3.jpg",
      },
      {
        "id" : "25",
        "titulo" : "The touch of death",
        "url" : "https://www.youtube.com/embed/wNibi-NWW4o?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "26",
        "titulo" : "Public Sculpture",
        "url" : "https://www.instagram.com/p/BRs8lraDImP/media/?size=l",
      },
      {
        "id" : "27",
        "titulo" : "2054034_1",
        "url" : "http://www.lesterwoodsgeneralbuilders.co.uk/cdata/36636/docs/2054034_1.pdf",
      },
      {
        "id" : "28",
        "titulo" : "The Destructive Character",
        "url" : "http://elgordondemolition.com/destructive.html",
      },
      {
        "id" : "29",
        "titulo" : "2-Person",
        "url" : "https://www.fieldcandy.com/bricks-and-mortar-2-person-tent.html?from_popup=1",
      },
      {
        "id" : "30",
        "titulo" : "8blocks",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/2408540/large_ddec424bd3ce9bc50c0f338c3748fb02.jpg?1531227792?bc=1",
      },
      {
        "id" : "31",
        "titulo" : "AMAZING BRICK DOMINO",
        "url" : "https://www.youtube.com/embed/tvVk8zt0u-A?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "32",
        "titulo" : "Dimensión Desconocida",
        "url" : "https://www.instagram.com/p/BpHwmfGBiZ5/media/?size=l",
      },
      {
        "id" : "33",
        "titulo" : "GOOD QUALITY",
        "url" : "https://www.youtube.com/embed/zItlrKZEtsQ?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "34",
        "titulo" : "Pure Strength",
        "url" : "https://www.youtube.com/embed/EEbt_xIFvQM?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "35",
        "titulo" : "nostalgia",
        "url" : "http://yoan-capote.com/es/artworks/escultura-e-instalacion/nostalgia",
      },
      {
        "id" : "36",
        "titulo" : "Stepping Stairs",
        "url" : "http://www.judithhopf.com/stepping-stairs-10-february-15-april-2018-kw-berlin",
      },
      {
        "id" : "37",
        "titulo" : "No.461901783",
        "url" : "https://i.imgur.com/la8zSIt.jpg",
      },
      {
        "id" : "38",
        "titulo" : "RELAX",
        "url" : "https://www.youtube.com/embed/videoseries?list=PLqSnMP0AuINyd0M9B7aIiqhmZSGSq3iV7&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "39",
        "titulo" : "Augmenting Human Intellect",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/1889793/large_b58c08aa57a08d7c79643f7a63926869.jpg?1521038146?bc=1",
      },
      {
        "id" : "40",
        "titulo" : "7:30 hrs",
        "url" : "http://monicabonvicini.net/730-hrs/",
      },
      {
        "id" : "41",
        "titulo" : "1e9738_7189685",
        "url" : "https://funnyjunk.com/channel/4chan/Anon+gets+hit+with+a+brick/txLaMgk/",
      },
      {
        "id" : "42",
        "titulo" : "#optionsofprogress",
        "url" : "https://www.instagram.com/p/Bal9TDQDjxb/media/?size=l",
      },
      {
        "id" : "43",
        "titulo" : "Freaky Eating",
        "url" : "https://www.youtube.com/embed/fv7wNgR0KvM?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "44",
        "titulo" : "fundraiser",
        "url" : "https://archive.org/download/buyabrick02/buyabrick02_archive.torrent",
      },
      {
        "id" : "45",
        "titulo" : "Carrying a stack",
        "url" : "https://www.youtube.com/embed/Mb-ez4kSAVk?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "46",
        "titulo" : "wasted",
        "url" : "https://memeworld.funnyjunk.com/gifs/Brick+wasted_ad3b56_5471093.gif",
      },
      {
        "id" : "47",
        "titulo" : "Hydraulic Press Test!",
        "url" : "https://www.youtube.com/embed/2Spj8_ED0TA?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "48",
        "titulo" : "hello?",
        "url" : "https://www.instagram.com/p/BI_DWe9BCKS/media/?size=l",
      },
      {
        "id" : "49",
        "titulo" : "Build what remains",
        "url" : "https://www.instagram.com/p/Bhy7kuxhMTu/media/?size=l",
      },
      {
        "id" : "50",
        "titulo" : "Bonds",
        "url" : "https://www.melissaprice.co.uk/Brick-Bonds",
      },
      {
        "id" : "51",
        "titulo" : "INDEX",
        "url" : "https://www.counter-print.co.uk/products/brick-index",
      },
      {
        "id" : "52",
        "titulo" : "Civic Pavers",
        "url" : "https://www.printedmatter.org/catalog/55152/",
      },
      {
        "id" : "53",
        "titulo" : "homepage",
        "url" : "https://memeworld.funnyjunk.com/pictures/Brick_3c427e_7278934.png",
      },
      {
        "id" : "54",
        "titulo" : "Hanging wall",
        "url" : "http://pietmondriaan.com/2013/06/04/ger-van-elk-3/",
      },
      {
        "id" : "55",
        "titulo" : "El Baile del Ladrillo",
        "url" : "https://www.deezer.com/es/track/14838828?autoplay=true",
      },
      {
        "id" : "56",
        "titulo" : "🧱",
        "url" : "https://emojis.wiki/brick/",
      },
      {
        "id" : "57",
        "titulo" : "Climbing",
        "url" : "https://www.youtube.com/embed/hATYErnjVdI?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "58",
        "titulo" : "profiblo",
        "url" : "https://sketchfab.com/bys3c/collections/profiblok",
      },
      {
        "id" : "59",
        "titulo" : "🐍",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/5493109/large_ebbc6ef641c14f0f70a0b81483991d15.jpg?1573705479?bc=0",
      },
      {
        "id" : "60",
        "titulo" : "Soft Toy Plush",
        "url" : "https://www.etsy.com/es/listing/594494598/soft-brick-toy-brick-plush-brick-pillow?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=brick+pillow&ref=sr_gallery-1-3",
      },
      {
        "id" : "61",
        "titulo" : "Horrifing moment",
        "url" : "https://www.dailymail.co.uk/embed/video/1700946.html",
      },
      {
        "id" : "62",
        "titulo" : "Natural Fit",
        "url" : "https://www.adforum.com/creative-work/ad/player/6704212/brick/huggies",
      },
      {
        "id" : "63",
        "titulo" : "(19xx)",
        "url" : "https://archive.org/details/Brick_Battle_19xx_-",
      },
      {
        "id" : "64",
        "titulo" : "2 doors",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/2602126/original_9125557e6ebf01f60d1d13f164c82b45.jpg?1535248289?bc=1",
      },
      {
        "id" : "65",
        "titulo" : "COCHE",
        "url" : "http://www.mataderomadrid.org/ficha/405/coche-de-ladrillo.html",
      },
      {
        "id" : "66",
        "titulo" : "Melbourne_House",
        "url" : "https://archive.org/details/Brick_Buster_1984_Melbourne_House",
      },
      {
        "id" : "67",
        "titulo" : "London Issue",
        "url" : "https://www.instagram.com/p/By5OTk0hhDk/?utm_source=ig_embed&utm_campaign=embed_video_watch_again",
      },
      {
        "id" : "68",
        "titulo" : "germinating",
        "url" : "https://ia800301.us.archive.org/4/items/mma_brick_germinating_553820/553820.jpg",
      },
      {
        "id" : "69",
        "titulo" : "talkative",
        "url" : "https://www.youtube.com/embed/H5sIQOq0r4Y?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "70",
        "titulo" : "RÉPLICA",
        "url" : "https://www.flickr.com/photos/lugaradudas/albums/72157649059689329/",
      },
      {
        "id" : "71",
        "titulo" : "Lichen! Libido! Chastity!",
        "url" : "https://sculpture-center.tumblr.com/post/130410086468/on-view-sculpturecenter-anthea-hamilton-lichen",
      },
      {
        "id" : "72",
        "titulo" : "employee of the month",
        "url" : "https://www.youtube.com/embed/1bx2MORQwZM?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "73",
        "titulo" : "doorframe ~ clip",
        "url" : "https://www.youtube.com/embed/0l85-kyPjRs?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "74",
        "titulo" : "WIP | BCB | INACHUS",
        "url" : "https://www.youtube.com/embed/TduSTyD3r7g?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "75",
        "titulo" : "Tipos de ladrillo",
        "url" : "https://www.youtube.com/embed/9z-8zN_STXA?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "76",
        "titulo" : "164 pages",
        "url" : "https://www.printedmatter.org/catalog/38994/",
      },
      {
        "id" : "77",
        "titulo" : "la8zSlt",
        "url" : "https://i.imgur.com/la8zSIt.jpg",
      },
      {
        "id" : "78",
        "titulo" : "moulded and ornamental",
        "url" : "https://babel.hathitrust.org/cgi/pt?id=nnc2.ark:/13960/t4fn79v1j&view=2up&seq=110",
      },
      {
        "id" : "79",
        "titulo" : "eyeofthejuggler",
        "url" : "https://www.youtube.com/embed/O_Ll8jTZM_E?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "80",
        "titulo" : "True Distinction",
        "url" : "https://ia800500.us.archive.org/2/items/ForestblendFinzerFaceBrick/ForestblendFinzerFaceBrick.pdf",
      },
      {
        "id" : "81",
        "titulo" : "Windows maze",
        "url" : "https://www.youtube.com/embed/7-yMd9Kt4mQ?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "82",
        "titulo" : "Edge a Garden",
        "url" : "https://www.youtube.com/embed/DZmR4A0-1ZU?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "83",
        "titulo" : "reference",
        "url" : "https://www.youtube.com/embed/SiKrML5lnTU?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "84",
        "titulo" : "supremecopies",
        "url" : "https://www.instagram.com/p/BK9tpPygERx/media/?size=l",
      },
      {
        "id" : "85",
        "titulo" : "viewpoint",
        "url" : "https://www.willemdehaan.be/viewpoint-2018.html",
      },
      {
        "id" : "86",
        "titulo" : "Platypus",
        "url" : "https://bigmemes.funnyjunk.com/pictures/Meat+brick+kid+is+going+to+be+a+freaking+poet_ad415d_5378461.png",
      },
      {
        "id" : "87",
        "titulo" : "London Issue",
        "url" : "https://www.instagram.com/p/By5OTk0hhDk/?utm_source=ig_embed&utm_campaign=embed_video_watch_again",
      },
      {
        "id" : "88",
        "titulo" : "germinating",
        "url" : "https://ia800301.us.archive.org/4/items/mma_brick_germinating_553820/553820.jpg",
      },
      {
        "id" : "89",
        "titulo" : "talkative",
        "url" : "https://www.youtube.com/embed/H5sIQOq0r4Y?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "90",
        "titulo" : "RÉPLICA",
        "url" : "https://www.flickr.com/photos/lugaradudas/albums/72157649059689329/",
      },
      {
        "id" : "91",
        "titulo" : "Lichen! Libido! Chastity!",
        "url" : "https://sculpture-center.tumblr.com/post/130410086468/on-view-sculpturecenter-anthea-hamilton-lichen",
      },
      {
        "id" : "92",
        "titulo" : "employee of the month",
        "url" : "https://www.youtube.com/embed/1bx2MORQwZM?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "93",
        "titulo" : "doorframe ~ clip",
        "url" : "https://www.youtube.com/embed/0l85-kyPjRs?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "94",
        "titulo" : "WIP | BCB | INACHUS",
        "url" : "https://www.youtube.com/embed/TduSTyD3r7g?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "95",
        "titulo" : "Tipos de ladrillo",
        "url" : "https://www.youtube.com/embed/9z-8zN_STXA?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "96",
        "titulo" : "164 pages",
        "url" : "https://www.printedmatter.org/catalog/38994/",
      },
      {
        "id" : "97",
        "titulo" : "la8zSlt",
        "url" : "https://i.imgur.com/la8zSIt.jpg",
      },
      {
        "id" : "98",
        "titulo" : "moulded and ornamental",
        "url" : "https://babel.hathitrust.org/cgi/pt?id=nnc2.ark:/13960/t4fn79v1j&view=2up&seq=110",
      },
      {
        "id" : "99",
        "titulo" : "eyeofthejuggler",
        "url" : "https://www.youtube.com/embed/O_Ll8jTZM_E?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "100",
        "titulo" : "True Distinction",
        "url" : "https://ia800500.us.archive.org/2/items/ForestblendFinzerFaceBrick/ForestblendFinzerFaceBrick.pdf",
      },
      {
        "id" : "101",
        "titulo" : "Windows maze",
        "url" : "https://www.youtube.com/embed/7-yMd9Kt4mQ?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "102",
        "titulo" : "Edge a Garden",
        "url" : "https://www.youtube.com/embed/DZmR4A0-1ZU?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "103",
        "titulo" : "reference",
        "url" : "https://www.youtube.com/embed/SiKrML5lnTU?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "104",
        "titulo" : "supremecopies",
        "url" : "https://www.instagram.com/p/BK9tpPygERx/media/?size=l",
      },
      {
        "id" : "105",
        "titulo" : "viewpoint",
        "url" : "https://www.willemdehaan.be/viewpoint-2018.html",
      },
      {
        "id" : "106",
        "titulo" : "Platypus",
        "url" : "https://bigmemes.funnyjunk.com/pictures/Meat+brick+kid+is+going+to+be+a+freaking+poet_ad415d_5378461.png",
      },
      {
        "id" : "107",
        "titulo" : "kitchen ware",
        "url" : "https://thegastronomic.files.wordpress.com/2007/07/pressed-sandwich-with-brick.jpg",
      },
      {
        "id" : "108",
        "titulo" : "lifting tong",
        "url" : "https://www.youtube.com/embed/bFaJJeX2q3I?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "109",
        "titulo" : "The Risk Of",
        "url" : "https://www.youtube.com/embed/F_PvIMuwfLM?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "110",
        "titulo" : "⇈",
        "url" : "https://www.instagram.com/p/BQ67HLqFiUh/?utm_source=ig_embed&utm_campaign=embed_video_watch_again",
      },
      {
        "id" : "111",
        "titulo" : "I'm a brick",
        "url" : "https://www.youtube.com/embed/HdXUJ1AsKPM?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "112",
        "titulo" : "warfare",
        "url" : "https://bigmemes.funnyjunk.com/gifs/Brick+it_4a3669_4441348.gif",
      },
      {
        "id" : "113",
        "titulo" : "DiscoveryMaths",
        "url" : "https://www.youtube.com/embed/9GsWdcwjCl8?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "114",
        "titulo" : "I AM THE REAL THING",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/5492637/large_24158afb49bc59a98814956ba103470b.jpg?1573700031?bc=0",
      },
      {
        "id" : "115",
        "titulo" : "miniature house",
        "url" : "https://www.youtube.com/embed/ZghowzuGPK8?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "116",
        "titulo" : "T.C.",
        "url" : "https://i.pinimg.com/originals/30/c0/03/30c003e88a4f6fcc4460391ea960692a.jpg",
      },
      {
        "id" : "117",
        "titulo" : "writting lesson",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/1889793/large_b58c08aa57a08d7c79643f7a63926869.jpg?1521038146?bc=1",
      },
      {
        "id" : "118",
        "titulo" : "three little pigs",
        "url" : "https://www.pitt.edu/~dash/type0124.html#lang",
      },
      {
        "id" : "119",
        "titulo" : "Hallway Scene",
        "url" : "https://www.youtube.com/embed/9TsQqjRWWWg?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "120",
        "titulo" : "Huws Gray",
        "url" : "https://www.huwsgray.co.uk/bricks/brick-library",
      },
      {
        "id" : "121",
        "titulo" : "monedero",
        "url" : "https://66.media.tumblr.com/9c24362d8361ecc55aa40fb122404825/tumblr_pkgdqcP2Fn1up7737o1_1280.png",
      },
      {
        "id" : "122",
        "titulo" : "Ramón Guarda Parera",
        "url" : "https://www.youtube.com/embed/videoseries?list=UUy4w2OlwgrSAtxTbDZ-bYWQ&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "123",
        "titulo" : "superfast",
        "url" : "https://cdn.shopify.com/s/files/1/0018/7793/4115/articles/Brickwheels-Package-banner.jpg?v=1578409955",
      },
      
      {
        "id" : "124",
        "titulo" : "talking to",
        "url" : "https://www.alamy.com/stock-photo-talking-to-a-brick-wall-12-10413230.html?pv=1&stamp=2&imageid=FD8C2E00-97A6-4C53-B3A8-60B448D86349&p=6168&n=0&orientation=0&pn=1&searchtype=0&IsFromSearch=1&srch=foo%3dbar%26st%3d0%26pn%3d1%26ps%3d100%26sortby%3d2%26resultview%3dsortbyPopular%26npgs%3d0%26qt%3dtalking%2520to%2520a%2520brick%2520wall%26qt_raw%3dtalking%2520to%2520a%2520brick%2520wall%26lic%3d3%26mr%3d0%26pr%3d0%26ot%3d0%26creative%3d%26ag%3d0%26hc%3d0%26pc%3d%26blackwhite%3d%26cutout%3d%26tbar%3d1%26et%3d0x000000000000000000000%26vp%3d0%26loc%3d0%26imgt%3d0%26dtfr%3d%26dtto%3d%26size%3d0xFF%26archive%3d1%26groupid%3d%26pseudoid%3d%7bFF64BBEC-99AF-4238-BF29-62B322F45BA0%7d%26a%3d%26cdid%3d%26cdsrt%3d%26name%3d%26qn%3d%26apalib%3d%26apalic%3d%26lightbox%3d%26gname%3d%26gtype%3d%26xstx%3d0%26simid%3d%26saveQry%3d%26editorial%3d1%26nu%3d%26t%3d%26edoptin%3d%26customgeoip%3d%26cap%3d1%26cbstore%3d1%26vd%3d0%26lb%3d%26fi%3d2%26edrf%3d0%26ispremium%3d1%26flip%3d0%26pl%3d",
      },
      {
        "id" : "125",
        "titulo" : "materials - by owner",
        "url" : "https://losangeles.craigslist.org/search/mat?query=bricks",
      },
      {
        "id" : "126",
        "titulo" : "us in precarity",
        "url" : "https://kimzumpfe.com/portfolio/us-in-precarity-words-against-reason/",
      },
      {
        "id" : "127",
        "titulo" : "7 games",
        "url" : "http://hyperboleandahalf.blogspot.com/2010/03/7-games-you-can-play-with-brick.html",
      },
      {
        "id" : "128",
        "titulo" : "SELF STACK",
        "url" : "https://www.youtube.com/embed/n5-QjyYfjlo?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "129",
        "titulo" : "prix-construction",
        "url" : "https://www.google.com/search?q=prix-construction+brique&tbm=isch&ved=2ahUKEwj79Jmpi-zlAhWEFFMKHQ1oC8sQ2-cCegQIABAA&oq=prix-construction+brique&gs_l=img.3..0i8i30.20349.20634..20790...0.0..0.193.466.0j3......0....1..gws-wiz-img.7JuG8Ug5KU8&ei=r4jOXbvhGISpzAKN0K3YDA&bih=720&biw=1396",
      },
      {
        "id" : "130",
        "titulo" : "piteoga amach as Eireann",
        "url" : "https://twitter.com/PantiBliss/status/1012828435968905217/photo/1",
      },
      {
        "id" : "131",
        "titulo" : "PLL",
        "url" : "http://teoretica.org/2016/04/02/taller-pienso-luego-ladrillo/",
      },
      {
        "id" : "132",
        "titulo" : "Building Material",
        "url" : "https://www.printedmatter.org/catalog/53967/",
      },
      {
        "id" : "133",
        "titulo" : "book shelf",
        "url" : "https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/2020x1160_fit/5576fee507a72c0678771e53/efbf211c197eae15777fbcb30e2ac1ba.jpeg",
      },
      {
        "id" : "134",
        "titulo" : "DIM MAK",
        "url" : "https://www.youtube.com/embed/gPIiCsWhdCs?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "135",
        "titulo" : "Supreme",
        "url" : "https://www.instagram.com/p/BK52LRBBIQv/?utm_source=ig_embed&utm_campaign=embed_video_watch_again",
      },
      {
        "id" : "136",
        "titulo" : "Etant donné un mur",
        "url" : "https://erichbrechbuhl.ch/etant-donne-un-mur",
      },
      {
        "id" : "137",
        "titulo" : "Evidence",
        "url" : "https://issuu.com/picapdx/docs/evidence_of_bricks",
      },
      {
        "id" : "138",
        "titulo" : "Hates Twitter",
        "url" : "https://www.youtube.com/embed/UekE5f10mz8?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "139",
        "titulo" : "comparação",
        "url" : "https://www.youtube.com/embed/B8HxpwDKW70?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "140",
        "titulo" : "blocos estrutural",
        "url" : "https://www.youtube.com/embed/rIbbklSWbfw?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "141",
        "titulo" : "Nova gramática de formas",
        "url" : "https://www.instagram.com/p/Bz8U_SdgmCq/media/?size=l",
      },
      {
        "id" : "142",
        "titulo" : "『BRICK SNAKE』",
        "url" : "https://www.youtube.com/embed/iZPMyUjm2Dk?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "143",
        "titulo" : "anti-infomercial",
        "url" : "https://imgur.com/gallery/mWPefaQ",
      },
      {
        "id" : "144",
        "titulo" : "SDMB",
        "url" : "https://www.youtube.com/embed/DWqvh0KsJTo?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "145",
        "titulo" : "Eazy to Carry",
        "url" : "https://www.youtube.com/embed/IPuOsNlhMNw?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "146",
        "titulo" : "backdoor",
        "url" : "https://d.justpo.st/media/images/2014/03/80236b340c22a0a53806f459c2664536.jpg",
      },
      {
        "id" : "147",
        "titulo" : "manta",
        "url" : "https://www.artsy.net/artwork/andrey-zignnatto-untitled-7",
      },
      {
        "id" : "148",
        "titulo" : "In the Hood",
        "url" : "https://www.youtube.com/embed/QGBkFvbnZhU?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1https://www.youtube.com/embed/QGBkFvbnZhU?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "149",
        "titulo" : "YourHomeInBrick",
        "url" : "https://ia800307.us.archive.org/20/items/YourHomeInBrick/YourHomeInBrick.pdf",
      },
      {
        "id" : "150",
        "titulo" : "Amerika",
        "url" : "http://www.mendezblake.com/captulo-xlv-amerika",
      },
      {
        "id" : "151",
        "titulo" : "chircales",
        "url" : "https://www.youtube.com/embed/tgFZDiDf2X8?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "152",
        "titulo" : "Fundamental Question",
        "url" : "http://danielvkeller.com/rear-views-show#/i/6",
      },
      {
        "id" : "153",
        "titulo" : "No thanks",
        "url" : "https://www.reddit.com/r/funny/comments/5bzie2/selling_bricks/",
      },
      {
        "id" : "154",
        "titulo" : "LR-AC-2/7",
        "url" : "https://www.youtube.com/embed/ga-zags8R3M?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "155",
        "titulo" : "Auction=1",
        "url" : "https://www.ebay.com/sch/1207/i.html?_from=R40&_nkw=brick&rt=nc&LH_Auction=1",
      },
      {
        "id" : "156",
        "titulo" : "S6 E20",
        "url" : "https://www.dailymotion.com/embed/video/x6dhy8t",
      },
      {
        "id" : "157",
        "titulo" : "60(ish) Seconds",
        "url" : "https://www.youtube.com/embed/A4Qpu3M4aO8?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "158",
        "titulo" : "swing",
        "url" : "https://i0.wp.com/bemethis.com/wp-content/uploads/2018/09/Some_406e83_6701668.jpg?w=1200&ssl=1",
      },
      {
        "id" : "159",
        "titulo" : "ASMR eating",
        "url" : "https://www.youtube.com/embed/UdpYKWmAy3k?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "160",
        "titulo" : "WorldRecord.mov",
        "url" : "https://www.youtube.com/embed/sruMy_XWOhY?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "161",
        "titulo" : "#todolobueno",
        "url" : "https://www.instagram.com/p/Bg2c-hfFHS8/?utm_source=ig_embed&utm_campaign=embed_video_watch_againmedia/?size=l",
      },
      {
        "id" : "162",
        "titulo" : "solid poo",
        "url" : "https://www.youtube.com/embed/ptPysr8Y7oQ?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "163",
        "titulo" : "washing machine",
        "url" : "https://www.youtube.com/embed/BS90PApRE84?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "164",
        "titulo" : "Mathematical Tile",
        "url" : "https://www.instagram.com/p/B1rzeWVH0Kr/media/?size=l",
      },
      {
        "id" : "165",
        "titulo" : "catalogue",
        "url" : "https://issuu.com/maisterbe/docs/olivier_bricks",
      },
      {
        "id" : "166",
        "titulo" : "imageatlas",
        "url" : "http://www.imageatlas.org/search?countries=AF%2CBR%2CCN%2CEG%2CFR%2CDE%2CIN%2CIR%2CIL%2CNZ%2CKP%2CRU%2CSA%2CKR%2CES%2CSE%2CSY%2CUA%2CUS%2CGB&q=bricks",
      },
      {
        "id" : "167",
        "titulo" : "rock bottom",
        "url" : "https://www.instagram.com/p/B4vT1YKg0t_/media/?size=l",
      },
      {
        "id" : "168",
        "titulo" : "Field",
        "url" : "https://www.instagram.com/p/BytJ9U3FILg/media/?size=l",
      },
      {
        "id" : "169",
        "titulo" : "Talking Bricks!",
        "url" : "https://www.youtube.com/embed/NrYBF6TF_a4?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "170",
        "titulo" : "Bau Construction",
        "url" : "https://www.youtube.com/embed/ecNxltdy8yw?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "171",
        "titulo" : "Immurement",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/5492742/large_36aefd46449619655ebee83fc6bc7a11.jpg?1573701393?bc=0",
      },
      {
        "id" : "172",
        "titulo" : "airball",
        "url" : "https://www.youtube.com/embed/KA-fg6mLkZY?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "173",
        "titulo" : "Teste de impacto",
        "url" : "https://www.instagram.com/p/BnK57bmnUUP/?utm_source=ig_embed&utm_campaign=embed_video_watch_again",
      },
      {
        "id" : "174",
        "titulo" : "2nd floor",
        "url" : "https://www.youtube.com/embed/m45Ba9TkmsQ?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "175",
        "titulo" : "OH YEAH!",
        "url" : "https://images.offerup.com/SERDIIQ6hl7blDbUGwxtDGvkWUg=/600x285/7270/727082be40f84a74b26816e08d7db027.jpg",
      },
      {
        "id" : "176",
        "titulo" : "$14.00",
        "url" : "https://draw-down.com/products/white-bricks-john-pound",
      },
      {
        "id" : "177",
        "titulo" : "New York",
        "url" : "https://www.instagram.com/p/B42PXtApNLb/media/?size=l",
      },
      {
        "id" : "178",
        "titulo" : "SAM",
        "url" : "https://www.nytimes.com/interactive/2018/03/07/upshot/bricklayers-think-theyre-safe-from-automation-robots.html",
      },
      {
        "id" : "179",
        "titulo" : "Brick conveyor",
        "url" : "https://www.youtube.com/embed/6MkN64gv4Yo?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "180",
        "titulo" : "SOLD OUT",
        "url" : "http://brownseditions.com/product/bricks/",
      },
      {
        "id" : "181",
        "titulo" : "3dWarehouse",
        "url" : "https://3dwarehouse.sketchup.com/search/?q=ladrillo",
      },
      {
        "id" : "182",
        "titulo" : "Primitive Technology",
        "url" : "https://www.youtube.com/embed/wrTDJbaxhOI?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "183",
        "titulo" : "countertop",
        "url" : "https://www.youtube.com/embed/eOvAwQD-now?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "184",
        "titulo" : "oasis",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/5492605/large_e91e5fd8f65f7bdc957f600ddf0096d4.jpg?1573699587?bc=0",
      },
      {
        "id" : "185",
        "titulo" : "BRICKWORK",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/5493112/large_9159f0fd1f5eae1e1f833b9bfa83fcb2.jpg?1573705534?bc=0",
      },
      {
        "id" : "186",
        "titulo" : "HowTo?",
        "url" : "https://www.wikihow.com/wikiHowTo?search=brick",
      },
      {
        "id" : "187",
        "titulo" : "INSTRUMENTAL TRANSCOMMUNICATION",
        "url" : "https://www.carlos-valverde.com/projects/itc/wall/wall.html",
      },
      {
        "id" : "188",
        "titulo" : "rock furniture",
        "url" : "http://www.ideanow.online/rockfurniture.html",
      },
      {
        "id" : "189",
        "titulo" : "4chan",
        "url" : "https://www.dailydot.com/unclick/4chan-unlock-xbox-prank-brick/",
      },
      {
        "id" : "190",
        "titulo" : "(Full video)",
        "url" : "https://www.youtube.com/embed/iazTQVi1CEE?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "191",
        "titulo" : "fashion world",
        "url" : "https://www.forces.net/sites/default/files/styles/cover_image/public/Update-Fool3-BrickCamo.jpg?itok=jQ9XPsYg",
      },
      {
        "id" : "192",
        "titulo" : "coming through",
        "url" : "https://gfycat.com/alarmingtestyhorsemouse",
      },
      {
        "id" : "193",
        "titulo" : "🐙",
        "url" : "https://chumley.barstoolsports.com/wp-content/uploads/2019/03/28/giphy2.gif",
      },
      {
        "id" : "194",
        "titulo" : "Hoopla!",
        "url" : "https://www.youtube.com/embed/PofM_EfBqtg?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "195",
        "titulo" : "Father Jack’s Pet",
        "url" : "https://www.youtube.com/embed/R1ZU6UMDfgY?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "196",
        "titulo" : "it’s a book bag",
        "url" : "https://www.youtube.com/embed/wf8CGO5UguU?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "197",
        "titulo" : "achievementthroughattitude.com",
        "url" : "https://www.youtube.com/embed/JNcmNfeqWBE?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "198",
        "titulo" : "🏆",
        "url" : "https://www.brickaward.com/Brick-Award.html",
      },
      {
        "id" : "199",
        "titulo" : "🦂",
        "url" : "https://www.turbosquid.com/es/3d-models/cocaine-bricks-model-1396103",
      },
      {
        "id" : "200",
        "titulo" : "✞",
        "url" : "https://es.wikipedia.org/wiki/Archivo:Gniewino_-_Cross_on_bricks_01.jpg",
      },
      {
        "id" : "201",
        "titulo" : "🜚",
        "url" : "https://www.publicdomainpictures.net/en/view-image.php?image=15832&picture=three-golden-bricks&large=1",
      },
      {
        "id" : "202",
        "titulo" : "🦟",
        "url" : "https://upload.wikimedia.org/wikipedia/commons/1/12/Insect_on_brick_wall.jpg",
      },
      {
        "id" : "203",
        "titulo" : "👑 👑 👑 👑 👑 👑",
        "url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Mural_crowns.svg/1200px-Mural_crowns.svg.png",
      },
      {
        "id" : "204",
        "titulo" : "🌊",
        "url" : "https://res.cloudinary.com/fictive-kin/image/upload/v1/verygoods/prod/42873b39d8754de034e2df211e71c926fc90a931",
      },
      {
        "id" : "205",
        "titulo" : "( NFL Style )",
        "url" : "https://www.youtube.com/embed/y-eY_D6sLCg?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "206",
        "titulo" : "Shaolin Demo",
        "url" : "https://www.youtube.com/embed/vrCJlrQZKxg?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "207",
        "titulo" : "Corner Wall",
        "url" : "https://www.youtube.com/embed/lSYi_rmYmGk?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "208",
        "titulo" : "1-800-INJURED",
        "url" : "https://www.youtube.com/embed/T3Hfqiu0dz0?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "209",
        "titulo" : "BFG",
        "url" : "https://www.youtube.com/embed/iEBdMuyHUEA?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "210",
        "titulo" : "(.otl file)",
        "url" : "https://player.vimeo.com/video/184042135",
      },
   ]
  }
  
  ;


  var fuentes = [
    "'Archivo Black', sans-serif;",

  ]

  function randomFuente(){
    return fuentes[Math.floor(Math.random()*fuentes.length)];
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  var cookieList = function(cookieName) {
  //When the cookie is saved the items will be a comma seperated string
  //So we will split the cookie by comma to get the original array
  var cookie = Cookies.get(cookieName);
  //Load the items or a new array if null.
  var items = cookie ? cookie.split(/,/) : new Array();

  //Return a object that we can use to access the array.
  //while hiding direct access to the declared items array
  //this is called closures see http://www.jibbering.com/faq/faq_notes/closures.html
  return {
      "add": function(val) {
          //Add to the items.
          items.push(val);
          //Save the items to a cookie.
          //EDIT: Modified from linked answer by Nick see
          //      http://stackoverflow.com/questions/3387251/how-to-store-array-in-jquery-cookie
          Cookies.set(cookieName, items.join(','), { expires: 7 });
      },
      "remove": function (val) {
          //EDIT: Thx to Assef and luke for remove.
          indx = items.indexOf(val);
          if(indx!=-1) items.splice(indx, 1);
          Cookies.set(cookieName, items.join(','), { expires: 7 });        },
      "clear": function() {
          items = null;
          //clear the cookie.
          Cookies.set(cookieName, null, { expires: 7 });
      },
      "items": function() {
          //Get all the items.
          return items;
      }
    }
  }
  var seen = new cookieList("Seen");
  var randomized = shuffle( noticias.lista );

  console.log( "Noticias: ", noticias.lista );
  console.log( "Randomized: ", randomized );

  for (var i = 0; i < randomized.length; i++) {
    function fontSize(min, max){
       return  Math.floor(Math.random() * (max - min) +1) + min;
    }

    var alignarray = [
      "left",
 
    ];
    var randomAlign = alignarray[Math.floor(Math.random()*alignarray.length)];

    contenedor.append('<li><a style="font-family:'+randomFuente()+' font-size:'+fontSize(24,24)+'px; text-align:'+randomAlign+'" data-unique="'+randomized[i].id+'" href="'+randomized[i].url+'" target="_blank">'+randomized[i].titulo+'</a></li>')
  }

  console.log( "Seen: ", seen.items() );

  $('#lista_noticias a').on('click', function( e ){
    console.log("Add: ", $(this).data('unique') );
    seen.add( $(this).data('unique') );
    if( $(this).hasClass('seen') ){
      e.preventDefault();
    }
    console.log( "Seen: ", seen.items() );
    refreshClasses();
  });

  function refreshClasses(){
    var vistos = seen.items();
    $("li a").each( function( i ){
      console.log("this", vistos.indexOf( $(this).data("unique") ) );
      if(  vistos.indexOf( $(this).data("unique") ) > -1 ){
        console.log("Seen");
        $(this).addClass("seen");
      }
    });
  }

  refreshClasses();

});



