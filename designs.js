// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

/*jQuery is used to select the form id, 'sizePicker' which controls the the size of your grid based on the input given to your Grid Height and Grid Width.
This is done because we want jQuery to 'do something' i.e Make the Grid, when the submit butoon is clicked.
Hence we listen for an event(function(e){}) where the height and width are assigned the value of whatever is inputed into the text field.
Then we call the makeGrid function which accepts two values*/
$('#sizePicker').submit(function(event){
    event.preventDefault();
   const height = $('#inputHeight').val();
    const width = $('#inputWeight').val();
    makeGrid(height, width);
});

/*Here is where we build our makeGrid function. We don't need to worry about calling the function first before actually building it because JavaScript's hoisting ability
takes care of that for us. Hoisting is a neat trick where the built function gets read by JavaScript first before anything else. This is a basic explanation though,
you can read more about it on your own.*/ 

function makeGrid(n, m){
    $('tr').remove(); //to clear any previous table


    for(let i = 1; i <= n; i++){

     //for loop that adds a table row of id=table to the table tag of id=pixelCanvas. Keeps making table rows till i = n(which stands for the height above)
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for(let k = 1; k <= m; k++){

     //for loop that adds a cell(td) to each table row created above until the width requirement is met.
            $('#table' + i).append('<td></td>');
        }
    
    }
    
    /*Here jQuery is used to toggle the color of a table cell(td) when a clicking event occurs. The color it is changed to is dependent on the 
    input value of the Color picker*/
    $('td').click(function addColor(){
        const color = $('#colorPicker').val();

        if($(this).attr('style')){
            $(this).removeAttr('style');
        }else{
            $(this).attr('style', 'background-color:' + color);
        }
    });
}
