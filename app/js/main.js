import $ from 'jquery';
import portfolio from './portfolio';

$(document).ready(function(){
  $('.exit').on('click', function(e) {
    console.log('clicked!');
    $('.home').toggleClass('hidden');
    // $(this).toggleClass('hidden');
  })

});
