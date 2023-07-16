
const quotes = [
    {
        author: "― Andre Gide, Autumn Leaves",
        quote: "“It is better to be hated for what you are than to be loved for what you are not.”"
    },
    {
        author: "― Narcotics Anonymous",
        quote: "“Insanity is doing the same thing, over and over again, but expecting different results.”"
    },
    {
        author: "― Friedrich Nietzsche, Twilight of the Idols",
        quote: "“Without music, life would be a mistake.”"
    },
    {
        author: "― Andre Gide, Autumn Leaves",
        quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”"
    },
    {
        author: "― Jim Rohn", 
        quote: "“Beware of what you become in pursuit of what you want.”"
    },
    {
        author: "― Epictetus", 
        quote: "“It's not what happens to you, but how you react to it that matters.”"
    },
    {
        author: "― Frank Sinatra", 
        quote: "“The best revenge is massive success.”"
    },
    {
        author: "― Wayne Gretzy", 
        quote: "“You miss 100% of the shots you don't take.”"
    },
    {
        author: "― Nelson Mandela", 
        quote: "“Resentment is like drinking poison and waiting for your enemies to die.”"
    },
    {
        author: "― Elbert Hubbard", 
        quote: "“Do not take life too seriously. You will not get out alive.”"
    },
    {
        author: "― Oscar Wilde", 
        quote: "“Be yourself; everyone else is already taken.”"
    },
    {
        author: "― Frank Zappa", 
        quote: "“So many books, so little time.”"
    },
    {
        author: "― Dr. Seuss", 
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
    },
    {
        author: "― Mae West", 
        quote: "“You only live once, but if you do it right, once is enough.”"
    },
    {
        author: "― Robert Frost", 
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”"
    },
]


function addQuote(){
    const index =  Math.floor(Math.random() * quotes.length + 1);
    document.querySelector('#output1').innerHTML = `${quotes[index].quote}`;
    document.querySelector('#output2').innerHTML = `${quotes[index].author}`;
    // if (index = index+1){
    //     index=index+2
    // }
}