# Entry 5
##### 4/27/25

### How I've been learning my tool

I was able to learn how collisions work for my Kaboom.js project. To be able to use collisions in Kaboom.js, you need to use `onCollision()` function and the object that's being collided with needs a name, something like "enemy", so that the function knows which game object is being put to use. I also learned that every game object involved with the function needs to have the `area()` component in order for the collisions to work. I also found one of the things you can make happen is that you can destroy both objects involved in the collision. However, I had a third object I wanted to get rid of after colliding, but it didn't seem like I could find a way to do that. This is what iwas able to test: 

![image](https://github.com/user-attachments/assets/8596614d-e5f4-4835-a2f4-969889be5ba6)

At the bottom of the steel object, there's the name in parenthesis. I had another one similar to one of my other game objects, however, when I set it to destroy that one along with the steel and player (not in the code), it didn't really seem to work. I tried changing the name to see if that would change anything, but it didn't. I also checked if the `area()` component was there, and it was, but it still didn't work. So that made me think if there was a limit on how much it would destroy. That didn't make sense, but I couldn't find a way to delete all three game objects, so I left it at two. Another thing I learned about is the `rand()` component too. With this, I was able to randomly change the position of my game objects. In between the parenthesis, there goes two numbers, and it'll pick a number between them at random. Since I wanted to make it spawn anywhere and not just focus on the x or y coordinates, it had to be used twice. So that'd look like this:

![image](https://github.com/user-attachments/assets/32a48ccc-e5e7-4d3a-8ac2-4d8f1bb0b7e0)

The `rand()` component would be placed on both ends of the place where the coordinates are specified. With that, it picks both of the numbers and now, it was able to spawn mostly anywhere on the map, besides outside of the border. I wasn't able t0 really make a game over scene too, but I figured that since I could destroy game objects, all I needed was some text to show when someone has lost or won. I placed the text in the `onCollide()` function and with that, I was able to make game over and winning scenes, which looked like this: 

![image](https://github.com/user-attachments/assets/10032de8-9773-4d0d-b349-56a1fcb4673d)

If the player collided with the wrong option, then the player and wrong object disappear. Then, text shows up as the game over screen. But if the player collides with the right option, then both of them disappear and the game displays a congratulatory message for the player. 

### How I finished my MVP

For the last few parts, all I needed to do was make the sprites for my game. So there wasn't much code involved, but it still had to do with my game, so I think it's relevant. For making sprites, I used an app called ProCreate. I had looked up if there was any way I should format it and there was. But I didn't need to worry about it yet, so first, I had to make the sprites without worrying about the format. However, when I replaced the sprites, there seemed to be a few issues. So, I inserted the sprites seperately rather than adding a sprite sheet. Then, I had to use `player.use()` in order to be able to switch the sprites, as an example:

```
onKeyDown('right', () => {
    player.move(300, 0)
    player.use(sprite("player5"));
})
```

If the right was detected being pressed down, then the idle sprite would change to another sprite, making it seem like it's moving. I was able to do this for all the other directiosn as well. After doing all of the replacements, my MVP was finished.

### EDP (Engineering Design Process)

I think I'm now on step seven of the process since I've basically done everything for my MVP. However, now that my MVP is done, I can go beyond my MVP. That's basically just making improvements or just adding other extra stuff you couldn't when making the MVP. I think once I'm done with beyond MVP, I'll finally be on my final step of the process.

## SKills

### Debugging

I've had a lot of issues with coding during the project which led to me doing a lot of revising and checking over the errors. So I had to improvise my coding a lot so that I'd be able to fix the errors. I also did a lot of tinkering, testing stuff out and seeing what would happen if I changed certain parts of my code. I failed to fully debug some of the code, so I hope to get better at that during my beyond MVP.

### Logical Reasoning

During my coding. I've had a lot of problems which led me to changing my coding a lot. Like when I had my sprite sheet, I had to make changes and insert the sprites seperately. I figured I had to change my code as well because of this, so I changed all of my coding to be able to use another way to make the switches to my sprites. Then there was when I wasn't able to make my game-over and winning scenes. I had to resort to make something else with what I could use, so I used the `destroy()` and `text()` components to make something similar to the ending scenes. I wasn't able to do some things, but I still tried to find out my other options in order for it to all work out, which was great since I practiced my logical reasoning.



[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
