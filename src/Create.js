function create_random_number () {
    var count = '';
    for (var i = 0; i < 4; i++) {
        var random_number = Math.floor(Math.random() * 10)
        while (is_equal_random_number(random_number, count) == true) {
            random_number = Math.floor(Math.random() * 10)
        }
        count = count + random_number;
    }
    localStorage.setItem("count", count)
    localStorage.guess_time="0";
    return count;
}

function is_equal_random_number (random_number, count) {
    var b = _.some(count, function (list) {
        return list == random_number;
    })
    return b;
}

function judge_number_repeat_or_not (random_number) {
    if(random_number!=''){
        for (var m = 0; m < 3; m++) {
            return get_counter_n(random_number, m)
        }
    }
    return false;
}

function get_counter_n (random_number, m) {
    for (var n = m + 1; n < 4; n++) {
        if (random_number[m] == random_number[n]) {
            return true;
        }
    }
}

function judge_number_random_or_not(){
    var number=[]
    for(var i=0;i<1000;i++){
        var random_number= create_random_number ();
        number.push({"random_number":random_number})
    }
    if(get_max_length (number).length<10){
        return true;
    }
}

function get_group_number(number){
    var group_number= _.groupBy(number,function(list){
        return list.random_number
    })
    var group_number_array=[];
    _.map(group_number,function(value,key){
        group_number_array.push({"number":key,"length":value.length})
    })
    return group_number_array;
}

function get_max_length (number) {
    var max=_.max(get_group_number(number), function (num) {
        return num.length;
    })
    return max;
}
