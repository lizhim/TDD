describe("Create a four-digit random number",function(){
    it("should be four-digit",function(){
        var counter=create_counter();
        expect(counter.length).toBe(4);
    });
    it("should be not repeat number",function(){
        var counter=create_counter();
        var repeat=judge_number_repeat_or_not(counter);
        expect(repeat).not.toEqual(false);
    });
    it("should be random",function(){
        var counter=create_counter();
        var random=judge_number_random_or_not();
        expect(random).toEqual(true);
    });
    it("should be Integer",function(){
        var counter=create_counter();
        expect(isNaN(counter)).toEqual(false)
    });
})
