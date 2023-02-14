document.getElementById('deposit-btn').addEventListener('click',function(){
    // console.log('deposit btn clicked');
    const depositField=document.getElementById('deposit-field');
    const newDepositTotalString = depositField.value;
    const newDepositTotal = parseFloat(newDepositTotalString);

    // console.log( typeof newDepositTotal);
    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(typeof(previousDepositTotal));

    depositTotalElement.innerText= newDepositTotal;
    const currentDepositTotal = previousDepositTotal + newDepositTotal; 
    depositTotalElement.innerText= currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';
})