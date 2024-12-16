# Entry 2: How I'm learning my tool (Kaboom.js)
##### 12/9/24

### Tinkering I've done with my tool
Ive been able to do some stuff with Kaboom.js, like for example, I've practiced more with movement. When doing movement, I used 'onKeyDown' and right after that I put the name of the key I wanted to write the function for. Then, below that I write the name of the variable and `.move`, which will just allow the sprite to move, as seen in the name. You still need to add coordinates though and I found that putting positive x-coordinates and 0 as the y-coordinate will make it move to the right. If it's negative, they move to the left. But now if it was reverse and the y-coordinates were positive and the x-coordinate was set to zero, it moves down. If it's negative, it moves to the left. This would look like this:

![image](https://github.com/user-attachments/assets/314f2df8-7f63-4b39-91f0-0f2b56b35a8d)

I also found that to make your sprite be able to jump, you just write `.jump` instead of `.move` and they're both built in functions. I don't think I will be using jumping for what I'm trying to do, but I decided it would be better to still give it a try, just in case. I tried using the space button for `onKeyDown`instead of the arrow keys, but the up key can also be used for this. My jumping was able to work, but now my problem was how to put a limit to it. If you keep the press on the space key, it's still going up and I wasn't sure how to change this. I tried using `variable.grounded` since I saw this as an option, but it still didn't do anything. 
I also tried finding out how scenes work, so I can using them to make the background and such. There wasn't a built in function for this, so it has to be treated like other game objects. which is basically `add ([ code goes in here ])`, so it's the same. I also tried making a platform instead of a background, so I have more options. But, when I made this platform, it was missing something since my sprite wasn't exactly sitting on the platform. But then I found it:

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

[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
