$(function(){
  var contenedor = $('#lista_noticias');
  var noticias = {
    "lista" : [
      {
        "id" : "1",
        "titulo" : "Up, Up, Up |",
        "url" : "https://www.youtube-nocookie.com/embed/hATYErnjVdI?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "2",
        "titulo" : "Knock, Knock |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/2602126/original_9125557e6ebf01f60d1d13f164c82b45.jpg?1535248289?bc=1",
      },
      {
        "id" : "3",
        "titulo" : "The Destructive Character |",
        "url" : "http://elgordondemolition.com/destructive.html",
      },
      {
        "id" : "4",
        "titulo" : "Leaning |",
        "url" : "https://miergallery.com/wp-content/uploads/2016/12/12-13-16-Mier-KilianRuthemann0129.jpg",
      },
      {
        "id" : "5",
        "titulo" : "Construction Site |",
        "url" : "https://goldsmith-ingrid-64253.netlify.com/",
      },
      {
        "id" : "6",
        "titulo" : "Hanging Wall |",
        "url" : "https://i.pinimg.com/474x/3f/14/3c/3f143c571b1d4528f3ba8af0f167256c--elk-art-sculpture.jpg",
      },
      {
        "id" : "7",
        "titulo" : "7:30 hrs  |",
        "url" : "http://monicabonvicini.net/wp-content/uploads/2019/06/003_MB_7.30-1-2.jpg",
      },
      {
        "id" : "8",
        "titulo" : "Museo del Ladrillo |",
        "url" : "http://www.museodelladrillo.com.ar/",
      },
      {
        "id" : "9",
        "titulo" : "Maze |",
        "url" : "https://www.youtube-nocookie.com/embed/7-yMd9Kt4mQ?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "10",
        "titulo" : "Three Modern Buildings |",
        "url" : "https://i.pinimg.com/originals/30/c0/03/30c003e88a4f6fcc4460391ea960692a.jpg",
      },
      {
        "id" : "11",
        "titulo" : "Barda  |",
        "url" : "https://images.squarespace-cdn.com/content/v1/577bf73b9f74567384fd351e/1525892688915-WFWU617ERYQ8SYMS3AEL/ke17ZwdGBToddI8pDm48kFY-p70DW_ENE3l19zcF9u4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcsByRaPJVCZeXe4xGF2lE77tusVfLx0CP8U-y-qxqMZ2YSKzTsbOwpCv5bCYPrwo3/CasaWabi_Mauricio-Limon_pc06.jpg?format=1500w",
      },
      {
        "id" : "12",
        "titulo" : "Manta |",
        "url" : "https://66.media.tumblr.com/6f6a76289597daae46e6872931bb1250/tumblr_o8946iY1bS1vtiglzo1_640.jpg",
      },
      {
        "id" : "13",
        "titulo" : "Tengo más cemento |",
        "url" : "https://www.youtube-nocookie.com/embed/7ynAQjIW9M4?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "14",
        "titulo" : "Maistros |",
        "url" : "https://www.youtube-nocookie.com/embed/zTpFm1G53DE?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "15",
        "titulo" : "Montões De Tijolos |",
        "url" : "https://thumbs.dreamstime.com/b/mont%C3%B5es-dos-tijolos-58429817.jpg",
      },
      {
        "id" : "16",
        "titulo" : "wikiHow |",
        "url" : "https://www.wikihow.com/Make-Bricks-from-Concrete",
      },
      {
        "id" : "17",
        "titulo" : "Edible Brick |",
        "url" : "https://www.youtube-nocookie.com/embed/UdpYKWmAy3k?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "18",
        "titulo" : "Brick Lives |",
        "url" : "ttps://www.youtube-nocookie.com/embed/YvvjKEdM02s?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "19",
        "titulo" : "on the edge of crazy |",
        "url" : "https://www.nytimes.com/interactive/2018/03/07/upshot/bricklayers-think-theyre-safe-from-automation-robots.html",
      },
      {
        "id" : "20",
        "titulo" : "Build what remains |",
        "url" : "https://66.media.tumblr.com/9c24362d8361ecc55aa40fb122404825/tumblr_pkgdqcP2Fn1up7737o1_1280.png",
      },
      {
        "id" : "21",
        "titulo" : "Two siblings |",
        "url" : "https://www.dailymail.co.uk/embed/video/1700946.html",
      },
      {
        "id" : "22",
        "titulo" : "Casa popular |",
        "url" : "http://relievecontemporaneo.com/wp-content/uploads/2019/04/Andrey-Zignnato_Relieve-Contempor%C3%A1neo-4.jpg",
      },
      {
        "id" : "23",
        "titulo" : "Los albañiles |",
        "url" : "https://www.youtube-nocookie.com/embed/BU0-hAAhWIA?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      
      {
        "id" : "24",
        "titulo" : "Reference for animation |",
        "url" : "https://www.youtube-nocookie.com/embed/SiKrML5lnTU?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "25",
        "titulo" : "If they could talk | ",
        "url" : "https://www.youtube-nocookie.com/embed/H5sIQOq0r4Y?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "26",
        "titulo" : "RGP |",
        "url" : "https://www.youtube.com/channel/UCy4w2OlwgrSAtxTbDZ-bYWQ",
      },
      {
        "id" : "27",
        "titulo" : "White Bricks |",
        "url" : "https://draw-down.com/products/white-bricks-john-pound",
      },
      {
        "id" : "28",
        "titulo" : "Réplica |",
        "url" : "http://www.lugaradudas.org/archivo/publicaciones/exhibiciones/2014_17_vitrina_replica.pdf",
      },
      {
        "id" : "29",
        "titulo" : "Brique |",
        "url" : "https://www.google.com/search?q=prix-construction+brique&tbm=isch&ved=2ahUKEwj79Jmpi-zlAhWEFFMKHQ1oC8sQ2-cCegQIABAA&oq=prix-construction+brique&gs_l=img.3..0i8i30.20349.20634..20790...0.0..0.193.466.0j3......0....1..gws-wiz-img.7JuG8Ug5KU8&ei=r4jOXbvhGISpzAKN0K3YDA&bih=720&biw=1396",
      },
      {
        "id" : "30",
        "titulo" : "Couch |",
        "url" : "https://i.redd.it/20sozvs2th001.jpg",
      },
      {
        "id" : "31",
        "titulo" : "Sofa  |",
        "url" : "https://i.redd.it/kispptlqspi21.jpg",
      },
      {
        "id" : "32",
        "titulo" : "The Rock Furniture |",
        "url" : "http://www.ideanow.online/rockfurniture.html",
      },
      {
        "id" : "33",
        "titulo" : "Brick Index |",
        "url" : "https://www.instagram.com/p/BvgwMH2lISn/",
      },
      {
        "id" : "34",
        "titulo" : "No Window |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/136711/large_32d1eca857bb0d4b020f6f22ffa3eeb9.jpg?1375476759?bc=1",
      },
      {
        "id" : "35",
        "titulo" : "Typical Shapes of Concrete Block |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/664979/large_c66af86f83081bbaebffd72e13034188.jpeg?1469628378?bc=1",
      },
      {
        "id" : "36",
        "titulo" : "Bald |",
        "url" : "https://d.justpo.st/media/images/2014/03/80236b340c22a0a53806f459c2664536.jpg",
      },
      {
        "id" : "37",
        "titulo" : "Inujima Seirensho |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/435302/large_0f36754c904f4fcc9f62b62910d7ad07.jpg?1563936847?bc=1",
      },
      {
        "id" : "38",
        "titulo" : "How to Build a Digital Brick Wall |",
        "url" : "http://www.allanwexlerstudio.com/projects/how-build-digital-brick-wall-2009",
      },
      {
        "id" : "39",
        "titulo" : "Even a brick wants to be something |",
        "url" : "https://www.youtube-nocookie.com/embed/13g9tr4JBEs?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "40",
        "titulo" : "Bricks |",
        "url" : "http://brownseditions.com/product/bricks/",
      },
      {
        "id" : "41",
        "titulo" : "Jake The Brick |",
        "url" : "https://www.dailymotion.com/embed/video/x6dhy8t",
      },
      {
        "id" : "42",
        "titulo" : "Amerika |",
        "url" : "https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/1010x580_fit/599f12405a4091c6048b4568/56fc67c68819327d3fe57ffb5a02a3f1.jpeg",
      },
      {
        "id" : "43",
        "titulo" : "Augmenting Human Intellect |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/1889793/large_b58c08aa57a08d7c79643f7a63926869.jpg?1521038146?bc=1",
      },
      {
        "id" : "44",
        "titulo" : "Pg 44 |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/3524888/large_5ab46305d25a7aae9b650779e77d110a.jpg?1548805798?bc=1",
      },
      {
        "id" : "45",
        "titulo" : "3D |",
        "url" : "https://supergriin.github.io/00FF00/FACHADA.html",
      },
      {
        "id" : "46",
        "titulo" : "Field Candy |",
        "url" : "https://www.fieldcandy.com/bricks-and-mortar-2-person-tent.html?from_popup=1",
      },
      {
        "id" : "47",
        "titulo" : "Bricklaying |",
        "url" : "http://www.lesterwoodsgeneralbuilders.co.uk/cdata/36636/docs/2054034_1.pdf",
      },
      {
        "id" : "48",
        "titulo" : "Fundamental Question |",
        "url" : "http://media.virbcdn.com/cdn_images/resize_640x640/a1/258a501a9f3b822b-CM_PAKT_VomKELLER_14.jpg",
      },
      {
        "id" : "49",
        "titulo" : "pienso luego ladrillo |",
        "url" : "http://teoretica.org/2016/04/02/taller-pienso-luego-ladrillo/",
      },
      {
        "id" : "50",
        "titulo" : "ID |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/577308/large_28e296d262aaa59edec91ca9aa84bf2d?1459136112?bc=1",
      },
      {
        "id" : "51",
        "titulo" : "Visible Object #6 |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/660789/large_d1236e598364fda1ff9e256cbad15099?1469044855?bc=1",
      },
      {
        "id" : "52",
        "titulo" : "There will come soft rains |",
        "url" : "https://socratessculpturepark.org/artist/maximilian-goldfarb/",
      },
      {
        "id" : "53",
        "titulo" : "Isodomo 312 |",
        "url" : "https://player.vimeo.com/video/288283997/",
      },
      {
        "id" : "54",
        "titulo" : "Brick Battle |",
        "url" : "https://archive.org/details/Brick_Battle_19xx_-",
      },
      {
        "id" : "55",
        "titulo" : "Brick Buster |",
        "url" : "https://archive.org/details/Brick_Buster_1984_Melbourne_House",
      },
      {
        "id" : "56",
        "titulo" : "MET |",
        "url" : "https://ia802304.us.archive.org/26/items/mma_brick_51992/51992.jpg",
      },
      {
        "id" : "57",
        "titulo" : "Buy a brick fundraiser |",
        "url" : "https://archive.org/download/buyabrick02/buyabrick02_archive.torrent",
      },
      {
        "id" : "58",
        "titulo" : "germinating |",
        "url" : "https://ia800301.us.archive.org/4/items/mma_brick_germinating_553820/553820.jpg",
      },
      {
        "id" : "59",
        "titulo" : "True Distinction |",
        "url" : "https://ia800500.us.archive.org/2/items/ForestblendFinzerFaceBrick/ForestblendFinzerFaceBrick.pdf",
      },
      {
        "id" : "60",
        "titulo" : "Your Home |",
        "url" : "https://ia800307.us.archive.org/20/items/YourHomeInBrick/YourHomeInBrick.pdf",
      },
      {
        "id" : "61",
        "titulo" : " Brick Time |",
        "url" : "https://www.instagram.com/p/B42PXtApNLb/",
      },
      {
        "id" : "62",
        "titulo" : "The Touch of Death |",
        "url" : "https://www.youtube-nocookie.com/embed/wNibi-NWW4o?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "63",
        "titulo" : "Dim Mak |",
        "url" : "https://www.youtube-nocookie.com/embed/gPIiCsWhdCs?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "64",
        "titulo" : "'Oh Yeah!",
        "url" : "https://images.offerup.com/SERDIIQ6hl7blDbUGwxtDGvkWUg=/600x285/7270/727082be40f84a74b26816e08d7db027.jpg",
      },
      {
        "id" : "65",
        "titulo" : "Chircales |",
        "url" : "https://www.youtube-nocookie.com/embed/tgFZDiDf2X8?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "66",
        "titulo" : "Immurement |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/5492742/large_36aefd46449619655ebee83fc6bc7a11.jpg?1573701393?bc=0",
      },
      {
        "id" : "67",
        "titulo" : "I am the real thing |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/5492637/large_24158afb49bc59a98814956ba103470b.jpg?1573700031?bc=0",
      },
      {
        "id" : "68",
        "titulo" : "rose |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/5492605/large_e91e5fd8f65f7bdc957f600ddf0096d4.jpg?1573699587?bc=0",
      },
      {
        "id" : "69",
        "titulo" : "Auction |",
        "url" : "https://www.ebay.com/sch/1207/i.html?_from=R40&_nkw=brick&rt=nc&LH_Auction=1",
      },
      {
        "id" : "70",
        "titulo" : " LTLB |",
        "url" : "https://www.youtube.com/channel/UCL3mMf7IqLRW0XUQ6t8SHHg",
      },
      {
        "id" : "71",
        "titulo" : "The Three Little Pigs |",
        "url" : "https://www.pitt.edu/~dash/type0124.html#lang",
      },
      {
        "id" : "72",
        "titulo" : "Tasty |",
        "url" : "https://www.youtube-nocookie.com/embed/fv7wNgR0KvM?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "73",
        "titulo" : "Supreme |",
        "url" : "https://www.instagram.com/p/BK52LRBBIQv/?utm_source=ig_embed&utm_campaign=embed_video_watch_again",
      },
      {
        "id" : "74",
        "titulo" : "Decorative Blocks |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/2408540/large_ddec424bd3ce9bc50c0f338c3748fb02.jpg?1531227792?bc=1",
      },
      {
        "id" : "75",
        "titulo" : " best gift ever |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/5493013/large_04e42d250478cb3faef2d3fb0c7cf411.jpg?1573704171?bc=0",
      },
      {
        "id" : "76",
        "titulo" : "『BRICK SNAKE』|",
        "url" : "https://www.youtube-nocookie.com/embed/iZPMyUjm2Dk?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "77",
        "titulo" : "snake |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/5493109/large_ebbc6ef641c14f0f70a0b81483991d15.jpg?1573705479?bc=0",
      },
      {
        "id" : "78",
        "titulo" : "Brick Bonds |",
        "url" : "https://www.melissaprice.co.uk/Brick-Bonds",
      },
      {
        "id" : "79",
        "titulo" : "Domino |",
        "url" : "https://www.youtube-nocookie.com/embed/tvVk8zt0u-A?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "80",
        "titulo" : "Brickwork |",
        "url" : "https://d2w9rnfcy7mm78.cloudfront.net/5493112/large_9159f0fd1f5eae1e1f833b9bfa83fcb2.jpg?1573705534?bc=0",
      },
      {
        "id" : "81",
        "titulo" : "Garret fails |",
        "url" : "https://www.youtube-nocookie.com/embed/NVyHkzXDWDk?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "82",
        "titulo" : "Juggling with gloves |",
        "url" : "https://www.youtube-nocookie.com/embed/a90m1SLL1I4?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "83",
        "titulo" : "eyeofthejuggler |",
        "url" : "https://www.youtube-nocookie.com/embed/O_Ll8jTZM_E?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&controls=0&disablekb=1",
      },
      {
        "id" : "84",
        "titulo" : "rock bottom |",
        "url" : "https://www.instagram.com/p/B4vT1YKg0t_/",
      },
      {
        "id" : "85",
        "titulo" : "viewpoint |",
        "url" : "https://www.instagram.com/p/BrfSRO4FdcL/",
      },
      {
        "id" : "86",
        "titulo" : "climbing ",
        "url" : "https://www.instagram.com/p/BQ67HLqFiUh/?utm_source=ig_embed&utm_campaign=embed_video_watch_again",
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



