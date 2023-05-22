$(function () {
  
  // Function to get the current date and display it
  $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY'));

  // Current hour for schedule
  const currentHour = dayjs().hour();

  // Assign a past, present, or future class to each time block
  $('.time-block').each(function() {
    var hour = $(this).attr('id').substr(-2);

    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour > currentHour) {
      $(this).addClass('future');
    } else {
      $(this).addClass('present');
    }
  });

  // Retrieve any time block user input from local storage
  $('.time-block').each(function() {
    var id = $(this).attr('id');
    var input = localStorage.getItem(id);
    $(this).find('.description').val(input);
  });

  // TODO: Add a listener for click events on the save button
  $('.saveBtn').on('click', function() {
    const hourId = $(this).closest('.time-block').attr('id');
    console.log(hourId);
    const input = $(this).siblings('.description').val();
    localStorage.setItem(hourId, input);
  });
});