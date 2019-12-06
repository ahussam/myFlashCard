function getCards(tag) {

  $.ajax({
      url: 'cards.json?tag=' + tag,
      type: 'get',
      dataType: 'json',
      success: function(data) {

          MyCards = data;
          i = 0; // first card
          $('#all').html((MyCards.length).toString());

          loadCards(i);

      },
      error: function(xhr, ajaxOptions, thrownError) {
          var errorMsg = 'Ajax request failed: ' + xhr.responseText;
          alert(errorMsg);
      }
  });



}

function loadCards(i) {

  if (i === MyCards.length || i > MyCards.length) {
      alert('No more cards to show');
  } else {
      var currentCard = MyCards[i];
      currentId = MyCards[i]._id;
      var solved = MyCards[i].solved;
      $('#solNum').text(MyCards[i].solved);
      $('#front').text(MyCards[i].front);
      var clean = DOMPurify.sanitize(MyCards[i].back);
      $('.flip-box-back').html(clean);
      $('#num').html((i + 1 || 0).toString());
  }
}

function flipCard() {

  $('.flip-box .flip-box-inner').css('transform', 'rotateY(180deg)');

}


function solveCard() {

  $.ajax({
      url: 'solve.json?id=' + currentId,
      type: 'put',
      success: function(result) {
          $('#solNum').html((parseInt($('#solNum').html()) + 1).toString());
      }
  });


}

function nextCard() {

  i++;
  $('.flip-box .flip-box-inner').css('transform', 'rotateY(360deg)');
  loadCards(i);

}