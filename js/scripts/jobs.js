$(function () {
  $('.jobs__blobs .blob').each(function () {
    $(this).css('border-radius', generateBorderRadiusBlob());
  });

  tabs({ buttonSelector: '.jobs__tabs__button', contentSelector: '.job' });
});
