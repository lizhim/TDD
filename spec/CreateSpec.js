describe("Create a four-digit random number",function(){

    afterEach(function(){
        clear()
    });

    it("should be four-digit",function(){
        var random_number=create_random_number();
        expect(random_number.length).toBe(4);
    });

    it("should be not repeat number",function(){
        var random_number=create_random_number();
        var repeat=judge_number_repeat_or_not(random_number);
        expect(repeat).not.toEqual(false);
    });

    it("should be random",function(){
        var random_number=create_random_number();
        var random=judge_number_random_or_not();
        expect(random).toEqual(true);
    });

    it("should be Integer",function(){
        var random_number=create_random_number();
        expect(isNaN(random_number)).toEqual(false)
    });
})
