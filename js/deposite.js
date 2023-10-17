document.getElementById('btn-deposit').addEventListener('click', function(){
    const addDeposit= document.getElementById('user-number');
    const newdepositamountstring =addDeposit.value;
// console.log(Adddeposit);
const newdepositamount=parseFloat(newdepositamountstring);

//     const addWithdraw= document.getElementById('user-withdraw');
//     const withdraw= addWithdraw.value;

// console.log(deposit,withdraw);

const depositTotalElement = document.getElementById('Deposit-input');
const previousdepositTotalstring= depositTotalElement.innerText;
// depositTotalElement.innerText = newdepositamountstring;
const previousdepositotal=parseFloat(previousdepositTotalstring);
// step 4 -> add number to set the total  deposit
const Totlamount= previousdepositotal+newdepositamount;

// console.log(Totlamount);
depositTotalElement.innerText= Totlamount;

// step 5->get balance current total
const BalanceTotalElement=document.getElementById('balance-total');

const previousbalancetotalstring=BalanceTotalElement.innerText;
const previousbalancetotal=parseFloat(previousbalancetotalstring);
// step6 -> claculet current total balance
const CurrentBlanceToatal=previousbalancetotal+newdepositamount;
BalanceTotalElement.innerText=CurrentBlanceToatal;
// step 7 -> clear the deposit field
addDeposit.value='';
})