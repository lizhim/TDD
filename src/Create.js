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
