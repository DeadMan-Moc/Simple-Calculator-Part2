describe("Simple calculator spec for functon add", ()=>{

    it ("Should add two numbers", ()=> {
        expect(calculator_instance.add(0,0)).toBe(0);
    })
    it ("Should add two numbers", ()=> {
        expect(calculator_instance.add(1,2)).toBe(3);
    })
    it ("Should add multiple numbers", ()=> {
        expect(calculator_instance.add(1,2,0)).toBe(3);
    })
    it ("Should multiply two numbers", ()=> {
        expect(calculator_instance.multiply(1,4)).toBe(4);
    })
    it ("Should add multiple numbers", ()=> {
        expect(calculator_instance.add(1,2,3,4)).toEqual(10);
    })

    it ("Should add multiple numbers", ()=> {
        expect(calculator_instance.add(1,2,3,4,6)).toEqual(16);
    })

    it ("Should multiply multiple numbers", ()=> {
        expect(calculator_instance.multiply(1,2,3,4,10)).toEqual(240);
    })
})