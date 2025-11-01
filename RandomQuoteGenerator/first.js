const quotes=[
    "Creativity is a natural extension of our enthusiasm",
    "Courage is going from failure to failure without losing enthusiasm",
    "No one can keep a Committed person from suceeding",
    "Winning is not everything, but the effort to win is",
    "Integrity simply means not violating one's own identity",
    "The aim of the wise is not to secure pleasure, but to avoid pain",
    "Creativity requires the courage to let go of certainities",
    "Commitment unlocks the doors of imagination and vision",
    "To know how to wait is the great secret of success",
    "Your Aim should be knowledge and wisdom not glamour of fame",
    "Happy people plan actions, they don't plan results",
    "You are never to old to set another Goal in your life",
    "There is always a better strategy than the one you have",
    "Identity is like a garment with which one covers oneself",
    "Keep a cool head and low profile but Aim to do something big",
    "Success usually comes to those who are too busy for it looking",
    "Set your goals high, and don't stop till you get there",
    "We are responsible for effort not the outcome",
    "The great aim of education is not knowledge, but action",
    "Effort only full releases its reward after a person refuses to quit"];
const btn=document.querySelector('button');
const quote=document.querySelector('h1');
btn.addEventListener('click',()=>{
    const index=Math.floor(Math.random()*20);
    quote.textContent=quotes[index];
})
// console.log(Math.floor(Math.random()*20))
