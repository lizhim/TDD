describe("CompareSixTime",function(){

    beforeEach(function(){
        localStorage.guess_time="0";
        localStorage.counter='9203';
        begin_button_is_clicked_or_not(false)
        guess_button_is_clicked_or_not(true)
    });

    afterEach(function(){
        clear()
    });

    it("should be output 猜测正确 when first time when you are correct",function(){
        guess_correct();
        expect(display_content("猜测正确")).toBe("猜测正确")
    });

    it("should be output 猜测正确 when six time when you are correct",function(){
        guess_correct();
        guess_wrong(5)
        expect(display_content("猜测正确")).toBe("猜测正确")
    });

    it("should be output 猜测错误 when six time when you are wrong",function(){
        var counter=localStorage.getItem("counter")
        guess_correct();
        guess_wrong(6)
        expect(display_content("猜测错误,您已猜测6次,数字是"+counter)).toBe("猜测错误,您已猜测6次,数字是"+counter)
    });
})
