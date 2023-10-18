function calculateConfectioneryCost(arr) {
    if (arr.length === 0) {
      return [];
    }
  
    const updatedCelebs = arr.map(celeb => {

      const todaySpend = celeb.purchaseToday.costPerItem * celeb.purchaseToday.amountBought;

      const yearlySpend = parseInt(celeb.yearlyCumulativeSpend.slice(1), 10); 

      const newYearlySpend = yearlySpend + todaySpend;
  
      return {
        name: celeb.name,
        yearlyCumulativeSpend: `£${newYearlySpend}`
      };
    });
  
    return updatedCelebs;
  }
  


module.exports = calculateConfectioneryCost;