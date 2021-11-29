function currencyFormat(num) {
      return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

function calculate_salaries(salary){
   let weeklyPay = document.getElementById("weekly-pay");
   let monthlyPay = document.getElementById("monthly-pay")
   let annuallyPay = document.getElementById("annually-pay");

   let week = salary / 52;
   let month = salary / 12;
   let year = salary / 1

   weeklyPay.innerHTML = currencyFormat(week);
   monthlyPay.innerHTML = currencyFormat(month);
   annuallyPay.innerHTML = currencyFormat(year);
}

function calculate_percentage(salary, tax){
   return (tax / salary);
}

function capital_gains(total){
   let capital_gain = document.getElementById("capitalgains")
   let salary_tax = total;

   capital_gain.innerHTML = currencyFormat(salary_tax - 9987);

}

function calculate_tax(){
   let salary = document.getElementById("payinput").value;
   let output = document.getElementById("taxoutput");
   let salary_frequecy = document.getElementById("payfreq").value;
   let tax_percentage = document.getElementById("percent");
   let total = 0;

      
   if (salary < 0){
      salary = 0;
   }

   if (salary_frequecy == "weekly"){
      salary = salary * 52;
   }
   else if (salary_frequecy == "monthly"){
      salary = salary * 12;
   }

   calculate_salaries(salary);

   if (salary <= 18200){
      output.innerHTML = `$ 0`;
      tax_percentage.innerHTML = `0%`
   }
   else if (salary >= 18201 && salary <= 45000){
      total = (salary - 18200) * 0.19;
      output.innerHTML = currencyFormat(total);
      tax_percentage.innerHTML = `${((total/salary) * 100).toFixed(2)}%`;
   }
   else if (salary >= 45001 && salary <= 120000){
      total = ((salary - 45000) * 0.325) + 5092;
      output.innerHTML = currencyFormat(total);
      tax_percentage.innerHTML = `${((total/salary) * 100).toFixed(2)}%`;
   }
   else if (salary >= 120001 && salary <= 180000){
      total = ((salary - 120000) * 0.37) + 29467; 
      output.innerHTML = currencyFormat(total);
      tax_percentage.innerHTML = `${((total/salary) * 100).toFixed(2)}%`;
   }
   else{
      total = ((salary - 180000) * 0.45) + 51667;
      output.innerHTML = currencyFormat(total);
      tax_percentage.innerHTML = `${((total/salary) * 100).toFixed(2)}%`;
   }

   capital_gains(total);

}


document.getElementById("payinput").addEventListener("input", calculate_tax);
document.getElementById("payfreq").addEventListener("change", calculate_tax);