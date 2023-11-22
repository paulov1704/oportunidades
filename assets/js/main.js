/* AOS.init(); */
//formulário
$(document).ready(function(){
    console.log("documento pronto");

    $('.form-control').on('focus',function(e){
        $(this).parent().addClass("active_content");
    });

    $('.form-control').on('blur',function(e){
        let val = $(this).val();
        if (val.trim()==""){
            $(this).parent().removeClass("active_content");  
        }
    });
});

//Carousel
$('.owl-bannerTopo').owlCarousel({
  loop: true,
  dots: true,
  nav: false,
  autoplay: false,
  margin:15,
  responsive: {
    0: {
      items: 1
    }
  }
});

//Adicionando titles nos links do carousel
$('.owl-dot').attr('title', 'botao slide');
$('.owl-next').attr('title', 'botao slide');
$('.owl-prev').attr('title', 'botao slide');

// Scroll Menu
/* $(document).scroll(function () {
    if ($(this).scrollTop() > 90) {
      $('.header').addClass('header-small');
    }
    else {
      $('.header').removeClass('header-small');
    }
}); */

//Mascaras JQuery
$(document).ready(function(){
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.phone_br').mask('(00) 00000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
    $('.money').mask('000.000.000.000.000,00', {reverse: true});
    $('.money2').mask("#.##0,00", {reverse: true});
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
            'Z': {
                pattern: /[0-9]/, optional: true
            }
        }
    });
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('##0,00%', {reverse: true});
    $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
    $('.placeholder').mask("00/00/0000", {placeholder: "//____"});
    $('.fallback').mask("00r00r0000", {
        translation: {
            'r': {
                pattern: /[\/]/,
                fallback: '/'
            },
            placeholder: "//____"
        }
    });
    $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});


    var nomeCurso = $('#nome_do_curso_selecionado').attr('data-name');
    $('#curso_selecionado').val(nomeCurso);
    $('.nome_curso').html(nomeCurso);
    

});

$('.titulo-faq').on('click', function(){

    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).parent().find('.descricao-faq').slideUp('fast');
    }else{
        $(this).addClass('active');
        $(this).parent().find('.descricao-faq').slideDown('fast');
    }    

});

// nome_do_curso_selecionado
// curso_selecionado
// if($('.nome_do_curso_selecionado').lenght > 0){
    // let nomeCurso = $('.nome_do_curso_selecionado').val();
    // $('#curso_selecionado').val(nomeCurso);
// }