describe ('monthly rate tests', function(){
	it('should calculate the monthly rate correctly', function(){
    const defaultValues = {
      amount: 100000,
      years: 8,
      rate: 5.5
    };
  expect (calculateMonthlyPayment(defaultValues)).toEqual('1289.93');
  expect (calculateMonthlyPayment({amount: 2000,years: 1,rate: 5.5})).toEqual('171.67');
  })
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 180503,
      years: 10,
      rate: 5.4
    };
    expect (calculateMonthlyPayment(values)).toEqual('1950.00');
  });

  it("should take loan amount with decimals", function() {
    const values = {
      amount: 200000.50,
      years: 5,
      rate: 10.5
    };
    expect (calculateMonthlyPayment(values)).toEqual('4298.79');
  });
});

afterAll(() => {
  setTimeout(function (){
      alert("Tests don't lie! Monthly payment you see is correct!")
  }, 2000);
  })