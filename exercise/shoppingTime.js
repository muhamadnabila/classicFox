// Sepatu brand Stacattu seharga 1500000
// Baju brand Zoro seharga 500000
// Baju brand H&N seharga 250000
// Sweater brand Uniklooh seharga 175000
// Casing Handphone seharga 50000

function shoppingTime(memberId, money) {
    // you can only write your code here!
    
    if (memberId === undefined || money === undefined || memberId.length === 0 || money.length === 0 ) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    }
    
    var chart = []
    var sisaUang = money
    for (var i = 0; i < 5; i++) {

      if (sisaUang >= 1500000) {
        chart.push('Sepatu Stacattu')
        sisaUang -= 1500000
      }
      else if (sisaUang >= 500000) {
        chart.push('Baju Zoro')
        sisaUang -= 500000
      }
      else if (sisaUang >= 250000) {
        chart.push('Baju H&N')
        sisaUang -= 250000
      }
      else if (sisaUang >= 175000) {
        chart.push('Sweater Uniklooh')
        sisaUang -= 175000
      }
      else if (sisaUang >= 50000) {
        chart.push('Casing Handphone')
        sisaUang -= 50000
        break
      }
    }
    var resultObj = {
      memberId : memberId,
      money : money,
      listPurchased : chart,
      changeMoney : sisaUang
      }
      return resultObj
    
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja