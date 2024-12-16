# Entry 2: How I'm learning my tool (Kaboom.js)
##### 12/9/24

### Tinkering I've done with my tool
Ive been able to do some stuff with Kaboom.js, like for example, I've practiced more with movement. When doing movement, I used 'onKeyDown' and right after that I put the name of the key I wanted to write the function for. Then, below that I write the name of the variable and `.move`, which will just allow the sprite to move, as seen in the name. You still need to add coordinates though and I found that putting positive x-coordinates and 0 as the y-coordinate will make it move to the right. If it's negative, they move to the left. But now if it was reverse and the y-coordinates were positive and the x-coordinate was set to zero, it moves down. If it's negative, it moves to the left. This would look like this:

```js
onKeyDown('right', () => {
    bean.move(300, 0)
})

onKeyDown('left', () => {
    bean.move(-300, 0)
})

onKeyDown('up', () => {
    bean.move(0, -300)
})

onKeyDown('down', () => {
    bean.move(0, 300)
})
```

I also found that to make your sprite be able to jump, you just write `.jump` instead of `.move` and they're both built in functions. I don't think I will be using jumping for what I'm trying to do, but I decided it would be better to still give it a try, just in case. I tried using the space button for `onKeyDown`instead of the arrow keys, but the up key can also be used for this. My jumping was able to work, but now my problem was how to put a limit to it. If you keep the press on the space key, it's still going up and I wasn't sure how to change this. I tried using `variable.grounded` since I saw this as an option, but it still didn't do anything. 
I also tried finding out how scenes work, so I can using them to make the background and such. There wasn't a built in function for this as I found out from here: https://stackoverflow.com/questions/70559159/kaboom-js-how-to-set-the-background-to-an-image , so it has to be treated like other game objects. which is basically `add ([ code goes in here ])`, so it's the same. I also tried making a platform instead of a background, so I have more options. But, when I made this platform, it was missing something since my sprite wasn't exactly sitting on the platform. But then I found it:

```js
add([
    rect(width(), 48),
    pos(0, height() - 48),
    outline(4),
    area(),
    body({ isStatic: true }),
    color(127, 200, 255),
])
```
![image](https://github.com/user-attachments/assets/e95542ad-2c4a-4c3f-a4df-8039153c83bd)

I found out that it needed a function called `body({ isStatic: true })` in order for the sprite to be able to stick to the platform. However, I was curious as to what would happen if it was changed to false, so I did that. Then when I did, I had the same problem as before. Also, when you moved the sprite down, it was able to push the platform and make it disappear since it was being pushed down by the sprite's force.

### My Freedom Project Goal (For WB)

I think the goal I wanna set for Winter Break is figuring out how to make one scene or more with symbols since it seems a lot more simpler than manually doing everything, but I have to figure out what went wrong when I did it the first time. I also wanna see if it's possible for me to learn how I can make it go to the next level/scene, since that's something I really need to learn as well. So to do this, I'll try watching some more tutorials and some more research.

### Engineering Design Process

I think I may be going back to step two since I've still been doing a lot of research for my Freedom Project tool and I'm still unsure of which way to be making my game. But this would technically make me be in step four too as well since I'm thinking about what way to be making the game, so I may be stuck inbetween those two steps for now.

### Skills 

#### Embracing failure

I'm making a lot of mistakes during my tinkering with Kaboom.js, but I think they may actually be helping me because it does motivate me to want to learn more about my tool. It makes me want to get it right and still keep on trying to figure out what I'm doing wrong with the code. It is giving me motivation, but at some point, I do hope to get the hang of how most of my tool functions. 

#### Organization

The last time I tried tinkering there was a huge mess, like too many files for me to keep track of since I imported a bunch of stuff from Kaboom, it also lagged just a bit when I tried importing the first time. This made it a bit confusing for me to figure what goes where. So I tried going back to the official website and found an easier way to not have everything jumbled up together. You could import Kaboom.js in an html file, but it didn't import in the huge amount of files from before, but it had to be inside of the script tags. It was sort of a clean slate, so now everything else was gone. But I think that helped me get more organized and was less stressful to manage the entire thing. I'm glad I was able to work on this skill since now it will be a bit easier. 

[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
