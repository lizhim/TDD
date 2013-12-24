function compare_counter_and_guess_number(counter,guess_number) {
    var number_of_A=0;
    var number_of_B=0;
    for(var i=0;i<4;i++){
        number_of_A =get_number_of_A(counter,guess_number,number_of_A,i);
        number_of_B=get_number_of_B(counter,guess_number,number_of_B,i)
    }
    accumulate_times()
    return  number_of_A+"A"+number_of_B+"B" ;
}
function accumulate_times(){
    var times=JSON.parse(localStorage.getItem("guess_time"))
    times=times+1;
    localStorage.setItem("guess_time",JSON.stringify(times))
}
function get_number_of_A(counter,guess_number,number_of_A,i){
    var A=number_of_A;
    for(var j=0;j<4;j++){
        if(counter[i]==guess_number[j]&&i==j){
            A=A+1;
        }
    }
    return A;
}
function get_number_of_B(counter,guess_number,number_of_B,i){
    var B=number_of_B;
    for(var j=0;j<4;j++){
        if(counter[i]==guess_number[j]&&i!=j){
            B=B+1;
        }
    }
    return B;
}
function judge_start_or_not(){
    var count=localStorage.getItem("count")||''
    if(count==''){
        display_content("尚未开始")
        return;
    }
    return judge_format_right_or_not(count);
}
function judge_format_right_or_not(count){
    var guess_number=get_input();
    if(guess_number.length!=4||judge_number_repeat_or_not(guess_number)==true){
        display_content("格式错误")
        return;
    }
    return guess_number_equal_random_number(count,guess_number);
}
