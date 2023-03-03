
db.createCollection("product_master")

db.product_master.insertMany([
    {productno:'P00001',description:'1.44floppies',profitpercent:5,unitmeasured:'piece',qtyonhand:100, recorderlvl:20, sellprice:525,costprice:500},
    {productno:'P03453',description:'Monitors', profitpercent:6, unitmeasured:'piece', qtyonhand:10, recorderlvl:3, sellprice:12000, costprice:11200},
    {productno:'P06734',description:'Mouse',profitpercent:5, unitmeasured:'piece', qtyonhand:20, recorderlvl:5, sellprice:1050, costprice:500},
    {productno:'P07865',description:'1.22 floppies',profitpercent:5, unitmeasured:'piece', qtyonhand:100, recorderlvl:20, sellprice:525, costprice:500},
    {productno:'P07868',description:'Keyboards',profitpercent:2, unitmeasured:'piece', qtyonhand:10, recorderlvl:3, sellprice:3150, costprice:3050},
    {productno:'P07885',description:'CD Drive',profitpercent:2.50, unitmeasured:'piece',qtyonhand:10,recorderlvl:3,sellprice:5250,costprice:5100},
    {productno:'P07965',description:'540 HDD',profitpercent:4, unitmeasured:'piece',qtyonhand:10,recorderlvl:3,sellprice:8400, costprice:8000},
    {productno:'P07975',description:'1.44 Drive',profitpercent:5,unitmeasured:'piece', qtyonhand:10, recorderlvl:3, sellprice:1050, costprice:1000},
    {productno:'P08865',description:'1.22 Drive',profitpercent:5,unitmeasured:'piece',qtyonhand:2,recorderlvl:3, sellprice:1050, costprice:1000},
])



db.createCollection("salesman_master")

db.salesman_master.insertMany([
 {salesman_no:"S00001", salesmanname:"Kiran", address1:"A/14 worli", address2:"nr. abc circle", city:"Bombay", pincode:400002, state:"Mah", salamt:3000, tgttoget:100, ytdsale:50, remark:"Good"},
 {salesman_no:"S00002", salesmanname:"Manish", address1:"65, nariman", address2:"opp. kbc ground", city:"Bombay", pincode:400001, state:"Mah", salamt:3000, tgttoget:200, ytdsale:100, remark:"Good"},
 {salesman_no:"S00003", salesmanname:"Ravi", address1:"P-7 Bandra", address2:"opp. kgf gold", city:"Bombay", pincode:400032, state:"Mah", salamt:3000, tgttoget:200, ytdsale:100, remark:"Good"},
 {salesman_no:"S00004", salesmanname:"Ashish", address1:"A/5 Juhu", address2:"nr. film city", city:"Bombay", pincode:400044, state:"Mah", salamt:3500, tgttoget:200, ytdsale:150, remark:"Good"},
])



db.createCollection("client_master")

db.client_master.insertMany([
    { Clientno: "C00001", Name: "Ivan", address1: "A/14 worli", city: "Bombay", pincode: 400054, state: "Maharashtra", baldue: 15000 },
    { Clientno: "C00002", Name: "Vandana", address1: "B-23 vesu ", city: "Madras", pincode: 780001, state: "Tamilnadu", baldue: 0 },
    { Clientno: "C00003", Name: "Pramada", address1: "65,nariman", city: "Bombay", pincode: 400057, state: "Maharashtra", baldue: 5000 },
    { Clientno: "C00004", Name: "Basu", address1: "p-7 Bandra", city: "Bombay", pincode: 400056, state: "Maharashtra", baldue: 0 },
    { Clientno: "C00005", Name: "Ravi", address1: "C-42 agra", city: "Delhi", pincode: 100001, state: "Delhi", baldue: 2000 },
    { Clientno: "C00006", Name: "Rukmini", address1: "A/5 Juhu", city: "Bombay", pincode: 400050, state: "Maharashtra", baldue: 0 }
])



// 1.change the city of clientno 'C00005' to 'Banglore.'
// db.client_master.update(
//     {Clientno:"C00005"},
//     {$set:{city:"Banglore"}}
// )

2. change the baldue of Clientno'C00001'to resizeBy.1000

db.client_master.update(
{Clientno:"C00001"},
{$set:{baldue:1000}}
)

3.change the costprice of mouse to resizeBy.950.00

    db.product_master.update(
        {description:"Mouse"},
        {$set:{costprice:950}}
    )
    
 4.change the city of the salesman to Pune
    
    db.salesman_master.update(
        {salesmanname:"Ravi"},
        {$set:{city:"pune"}}
    )