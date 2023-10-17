document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawField=document.getElementById('user-withdraw');

    const witdrawAmountstring=withdrawField.value;
    // console.log(Witdrawtotal);
 const newwithdrawAmount=parseFloat(witdrawAmountstring);
//  console.log(withdrawAmount);

const withdrawTotalElement=document.getElementById('withdraw-total');
const previouseWithdrawTotalString=withdrawTotalElement.innerText;

const previouseWithdrawTotal=parseFloat(previouseWithdrawTotalString);
// console.log(previouseWithdrawTotal);

const Currentwithdrawtotal=previouseWithdrawTotal+newwithdrawAmount;

withdrawTotalElement.innerText=Currentwithdrawtotal;

const balanceTotalElement=document.getElementById('balance-total');
const previousbalancetotalstring=balanceTotalElement.innerText;
const previousBalancetotal=parseFloat(previousbalancetotalstring);
const newBalanceTotal=previousBalancetotal-newwithdrawAmount;
balanceTotalElement.innerText=newBalanceTotal;
withdrawField.value='';
})