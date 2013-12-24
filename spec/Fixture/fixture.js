function get_input(){
    return document.getElementById("input").value;
}
function display_content(content){
    return document.getElementById("output").innerHTML=content;
}
function begin_button_is_clicked_or_not(click){
    return document.getElementById("begin").disabled=click;
}
function guess_button_is_clicked_or_not(click){
    return document.getElementById("guess").disabled=click;
}

function clear(){
    localStorage.count='';
    display_content('');
    begin_button_is_clicked_or_not(false);
    guess_button_is_clicked_or_not(false);
}
