describe("Compare the number of guesses",function(){
    var counter='9203'
    beforeEach(function(){
        var guess_number;
    });

    afterEach(function(){
        clear()
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

