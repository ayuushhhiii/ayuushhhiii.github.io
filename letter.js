var i = 0;
var txt1 = "Heluuu Ayuushhhiii...!    > Welcome to my world. Being an introvert I often find it difficult expressing myself to > people. But when I do, I make > sure that the other person > really feels special 😁 >> Yeahh.. I suck at coming up with kickass puns or smooth pick up lines 🙁. That said... < Ayuushhhiii you have such a cuuutee smilee 😊... you see.. it is among the prettiest things i've seen in my life. I can only wonder how much more beautiful it would be in the real life. No wonder you are born 2 years later than me, God sure would've taken his time in creating yaa, only that would explain your extremeee cuuteeenessss >> Wish I could meet you right now, ughhh !!!  I wanna know more about youu! I wanna spend more time with ya and see how it goesss !! What's in it for you? >> You'll be getting a kid like friend, who would sing songs for you, send you a nice breakfast when you are sick, write letters for ya, hold your hand everytime he meets you, hear you out when you have a bad day,.... basically would just exist in your life as a bestiee 😁. You can trust me on that, I've been with that idiot for 23 years now. >>  Also I'm really good with numbers. Try sharing yours today 👉👈 and ask me a week later. I'll be able to memorize it";
var speed = 50;
typeWriter();
function typeWriter() {
    if (i < txt1.length) {        
        if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
        else if(txt1.charAt(i)=='>')
            document.getElementById("text1").innerHTML += '</br>'
        else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}