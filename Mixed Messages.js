// This Project will show a random joke for each day of the week and a final message
const jokes = {
    day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    joke: ['Why did Wi-Fi and the computer get married? because they had a connection', 
        'I love the smell of my F5 key. – It is very refreshing.', 
        'Why was the computer so good at golf? because he had a hard drive',
        'A programmer’s wife tells him, - While you’re at the grocery store, buy some eggs. He never comes back.',
        'Why was the JavaScript developer sad? Because he didn´t Node how to Express himself',
        'Chuck Norris can take a screenshot of his blue screen',
        'A foo walks into a bar, takes a look around and says ´Hello World´'],
    random: ['Happy coding', 
        'Hope you are not just scrolling at the toilet', 
        'Smile to the camera', 
        'Virus Alert!', 
        'Why aren`t you working?',
        'Have a great day',
        'Hope is not Monday'],

}
let day =jokes.day[Math.floor(Math.random() * jokes.day.length)];
let joke = jokes.joke[Math.floor(Math.random() * jokes.joke.length)];
let random = jokes.random[Math.floor(Math.random() * jokes.random.length)];

console.log('Today is ' + day + '. Here is your daily joke: ' + joke + '. Hahahahaha am I not the funniest? BTW, ' + random);

