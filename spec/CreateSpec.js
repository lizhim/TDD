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
});
describe("Compare the number of guesses and random number",function(){
    var counter='9203'
    beforeEach(function(){
        var guess_number;
    });
    it("should be 0A0B when guess_number is '5678'",function(){
        var guess_number='5678';
        var comparison_result=compare_counter_and_guess_number(counter,guess_number);
        expect(comparison_result).toBe("0A0B")
    });
    it("should be 0A1B when guess_number is '5679'",function(){
        var guess_number='5679';
        var comparison_result=compare_counter_and_guess_number(counter,guess_number);
        expect(comparison_result).toBe("0A1B")
    });
    it("should be 1A0B when guess_number is '5608'",function(){
        var guess_number='5608';
        var comparison_result=compare_counter_and_guess_number(counter,guess_number);
        expect(comparison_result).toBe("1A0B")
    });
    it("should be 2A2B when guess_number is '9230'",function(){
        var guess_number='9230';
        var comparison_result=compare_counter_and_guess_number(counter,guess_number);
        expect(comparison_result).toBe("2A2B")
    });
    it("should be 3A0B when guess_number is '5203'",function(){
        var guess_number='5203';
        var comparison_result=compare_counter_and_guess_number(counter,guess_number);
        expect(comparison_result).toBe("3A0B")
    });
    it("should be 4A0B when guess_number is '9203'",function(){
        var guess_number='9203';
        var comparison_result=compare_counter_and_guess_number(counter,guess_number);
        expect(comparison_result).toBe("4A0B")
    });
})
