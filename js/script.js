const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // 最後のスライドまで行った後に最初のスライドに戻る
    loop: true,
    
  
    // If we need pagination
    // ページ下部のドット
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
  
    // Navigation arrows
    // アローアイコン
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  
    // And if we need scrollbar
    // 今回は必要ない（スクロールバー）
    // scrollbar: {
    // el: '.swiper-scrollbar',
    // },
    
  });

  new WOW().init();

  //ドロワーメニューへのクラスつけ外し
  jQuery('.drawer-icon').on('click', function(e) {
    e.preventDefault();

    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');

    return false;
  });

  //ページ内リンクの移動時間
  jQuery('a[href^="#"]').on('click', function() {

    //ヘッダーの高さを取得
    var header = jQuery('header').innerHeight();
    //hrefを取得
    var id =jQuery(this).attr('href');

    //ページトップ用
    var position = 0;
    if ( id != '#') {
      //ページトップ以外のボタン
      var position = jQuery(id).offset().top - header;
    }
    
    jQuery('html,body').animate({
      scrollTop: position
    },
    300);
  });

  //ページトップボタンの表示・非表示
  jQuery(window).on('scroll', function(){
    if ( 100 < jQuery(this).scrollTop()) {
      jQuery('.to-top').addClass('is-show');
    } else {
      jQuery('.to-top').removeClass('is-show');
    }
  });

  //ヘッダーナビの赤線の表示
  jQuery('.header-nav li a').on('click', function(){
    jQuery('.header-nav li a').removeClass('is-active');
    jQuery(this).addClass('is-active');
  });

  //アコーディオン
  jQuery('.qa-box-q').on('click', function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.qa-box-icon').toggleClass('is-open');
  })