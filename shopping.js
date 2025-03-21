/*  Write a program to calculate the price of a basket of shopping

Items are presented one at a time, in a list, identified by a name - for example "Apple"  or "Banana"
Multiple items are present multiple times in the list, so for example ["Apple","Apple","Banana"] is a basket with two apples and one Banana

Items are priced as follows:
 - Apples are 35p each
 - Bananas are 20p each
 - Melons are 50p each, but are available as a buy one get one free
 - Limes are 15p each, but are available in a three for the price of two 

*/

function cartTotal(cart)
{
	const applePrice=35,bananaPrice=20,melonPrice=50,limePrice=15;
    let appleCount=0,bananaCount=0,melonCount=0,limeCount=0;
	
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        if (item === "Apple") {
            appleCount++;
        } else if (item === "Banana") {
            bananaCount++;
        } else if (item === "Melon") {
            melonCount++;
        } else if (item === "Lime") {
            limeCount++;
        }
    }
	
	const totalAppleCost= appleCount * applePrice;
    const totalBananaCost = bananaCount * bananaPrice;
	const totalMelonCost =Math.ceil(melonCount / 2) * melonPrice;
    const totalLimeCost =Math.floor(limeCount / 3) * (2 * limePrice) + (limeCount % 3) * limePrice;
	const totalCost=totalAppleCost + totalBananaCost + totalMelonCost + totalLimeCost;
	
    document.writeln(`
        Total Apple Cost = ${totalAppleCost}p<br>
        Total Banana Cost = ${totalBananaCost}p<br>
        Total Melon Cost = ${totalMelonCost}p<br>
        Total Lime Cost = ${totalLimeCost}p<br>
        Total Cart Cost = ${totalCost}p<br>
    `);
	
    	
}

const shoppingCart = ["Apple","Apple","Banana","Banana","Banana","Melon","Melon","Lime","Lime","Lime"];
cartTotal(shoppingCart);
