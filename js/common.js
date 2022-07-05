$(function () {
  $('.heart').on('click', function () {
    $(this).addClass('off')
  })

  $('.heart_on').on('click', function () {
    $(this).siblings('.heart.off').toggleClass('off')
  })
})

$(function () {
  $('.ham').on('click', function () {
    $('.header_sidebar.close').removeClass('close')
  })

  $('.closing_btn').on('click', function () {
    $('.header_sidebar').addClass('close')
  })
})
