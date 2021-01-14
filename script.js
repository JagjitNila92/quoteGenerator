const signs = ["Capricorn", "Aquarius", "pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius" ]

const quotes = ["Love For All, Hatred For None.",
"Change the world by being yourself.",
"Never regret anything that made you smile.",
"Die with memories, not dreams.",
"Aspire to inspire before we expire",
"Everything you can imagine is real.",
"Simplicity is the ultimate sophistication.",
"Whatever you do, do it well.",
"What we think, we become",
"All limitations are self-imposed.",
"Tough times never last but tough people do."]

const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
const newSign = signs[Math.floor(Math.random() * signs.length)];
let msg;
let  i;

/*for ( i = 'capricorn' === newSign; i++){
    console.log(`Congratulations your star sign is Capricorn and your random quote is: ${newQuote}`)
} Here I considered using a for loop. However, after facing many difficulties I decided to go for an IF statement. */

if (newSign === 'Capricorn') {
    console.log(`Congratulations your star sign is Capricorn and your random quote is: ${newQuote}`)
} if (newSign === 'Aquarius') {
    console.log(`Congratulations your star sign is Aquarius and your random quote is: ${newQuote}`)
} if (newSign === 'pisces') {
    console.log(`Congratulations your star sign is pisces and your random quote is: ${newQuote}`)
} if (newSign === 'Aries') {
    console.log(`Congratulations your star sign is Aries and your random quote is: ${newQuote}`)
} if (newSign === 'Taurus') {
    console.log(`Congratulations your star sign is Taurus and your random quote is: ${newQuote}`)
} if (newSign === 'Gemini') {
    console.log(`Congratulations your star sign is Gemini and your random quote is: ${newQuote}`)
} if (newSign === 'Cancer') {
    console.log(`Congratulations your star sign is Cancer and your random quote is: ${newQuote}`)
} if (newSign === 'Leo') {
    console.log(`Congratulations your star sign is Leo and your random quote is: ${newQuote}`)
} if (newSign === 'Virgo') {
    console.log(`Congratulations your star sign is Virgo and your random quote is: ${newQuote}`)
} if (newSign === 'Libra') {
    console.log(`Congratulations your star sign is Libra and your random quote is: ${newQuote}`)
} if (newSign === 'Scorpio') {
    console.log(`Congratulations your star sign is Scorpio and your random quote is: ${newQuote}`)
} if (newSign === 'Sagittarius') {
    console.log(`Congratulations your star sign is Sagittarius and your random quote is: ${newQuote}`)
} 

//console.log(newSign);
//console.log(newQuote);

