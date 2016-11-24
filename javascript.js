
var years = 0;
var cigs_per_day = 0;
var total_cigs = 0;
var price_per_pack = 0;
var final_amount = 0;
var packs_per_month = 0;
var cigs_per_pack = 50;

function numberOfCigarettes(){
    cigs_per_day = document.getElementById("cigs_per_day").value;
    years = document.getElementById("years").value;
    packs_per_month = document.getElementById("packs_per_month").value;
    if (packs_per_month > 0 ) {
        total_cigs = (packs_per_month * cigs_per_pack) / 30 * 365 * years;
    } else {
        total_cigs = cigs_per_day * 365 * years;
    }
    var brand = document.getElementById("cig_selector").value;
    document.getElementById("num_smoked_result").innerHTML =  total_cigs + " " + brand + " cigarettes";
} 

function moneySpent(){
    price_per_pack = document.getElementById("price_per_pack").value;
    final_amount = price_per_pack * (total_cigs / 20);
    document.getElementById("amount_spent").innerHTML = final_amount;
}

