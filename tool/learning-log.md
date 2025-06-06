# Tool Learning Log

## Tool: **Kaboom.js**

## Project: **Make an RPG with 2d sprites**

---

### 10/4/24:
* I tried to test out some things in the Kaboom.js playground to see what it has
* Has different things like gravity, add, movement, etc.
* Tried seeing what gravity does
* https://kaboomjs.com/play?example=gravity
* Near the top it says `setGravity(1600)`, I think 1600 may be the default value
* I wondered what would happen if I tried changing the value, so I did a few times, to like 1800 and 1400
* On the other side of the code, it shows what the product of the code is
  ![image](https://github.com/user-attachments/assets/5c69e9a9-b42a-4818-9de0-d91e00996d53)
* When setting it to a higher number, the sprite jumps low
* When it's set to a low number, the sprite jumps higher
* So you add more or less force depending on what Number is inserted

* Below, there was more code but I also saw that it said add which was a component I saw, so I went back to check it since it was the first one on the list
* More explanations, add is used to add a game object, which I think is things like sprites, backgrounds, props, etc.
* Below, there was more components, with small explanations, will put here in case of usage:
![image](https://github.com/user-attachments/assets/674e4f4a-41e2-4434-8570-2fe27f769f19)
* Explanations :
* sprite() component makes it render as a sprite
* pos() component gives it position, also enables movement
* rotate() component gives it rotation
* anchor() component defines the pivot point (defaults to "topleft")
* Will try more components or a video tutorial


### 10/6/24:
* Watching a video tutorial of how to make a game with Kaboom.js
* https://www.youtube.com/watch?v=hgReGsh5xVU
* Some notes:
* body() makes the game object fall with gravity
* keyPress is used so that when you press whatever key you set it to, something happens
* To test what you wrote, `debug.log('message here");` can be written
* `scale()` can be used to change the size of the sprite
* Brackets always needs to be used if it's an array of components
* Sprites always need to be loaded or they will not be recognized

![image](https://github.com/user-attachments/assets/b8c145a4-31c6-4161-a4c6-e4211e5e6f0e)
* `{flipY: true}` will flip the sprite ^^^
* `rand(,)` is like a random number generator
* Putting a string in between the list is considered a tag, so it can be found if something like the action function is used
* `Action` will specify something you want to do to certain game objects every frame
* `tag.move(,)` lets the game object move

![image](https://github.com/user-attachments/assets/5005630e-aa40-4fdd-b765-a2af4094b4be)

* If I collide with something specific, I can make it go to a scene, for example, a game over screen, saving in case of usage
* `play()` will allow you to play a sound effect of your choice
* How does the custom component work? OP wrote `PIPE_GAP` for the space between the gaps of the pipes, it works, but I don't understand how?
* Why are the arrow functions needed? What do they really do?
* A lot of the code still confuses me, some seems a little too advanced since I don't understand and I have questions but I think I'll try finding more tutorials or seeing if Phaser is less complicated for me instead next time

### 10/21/24:

* Learning about Phaser, following a tutorial: https://phaser.io/tutorials/making-your-first-phaser-3-game/part1
* ^^ Tries explaining about how to make a starter game to get used to the basics
* Not entirely sure about how Phaser is meant to work, but that's why I looked for this tutorial to understand better
* Phaser seems to use a lot of functions, like creating, updating and preloading
* Preload is a function that Phaser automatically looks for, so it's important to use it
* It looks for it since its needed to load the sprites and everything else made for the game
* A lot of the commands start with the word `this` usually
* `platform.create` is used to make a floor, anything for the sprite to stand on
* How do you make a sprite walk?
* When they write down `repeat:` in the code, there's a negative one, why that number and not a positive one?
* Phaser seems more complicated to me than Kaboom.js does, so I think I'm gonna end up using Kaboom after all
* Next time I'll try to learn more about how to make and use sprites, also making them walk

### 11/4/24:

* Watching this tutorial to make another game, plus for levels: https://www.youtube.com/watch?v=37rASpfnCCM
*


### 12/14/24:

* Testing movement in Kaboom.js
* `onKeyDown` and adding the name of the key identifies the key
* `variable.move` will allow the sprite to actually move
* Things to remember from here:
  * ![image](https://github.com/user-attachments/assets/d615604c-a4c6-4ae7-9ed4-266a9254b9ff)
  * positive x-coordinates and 0 as the y-coordinate makes it move to the right
  * negative x-coordinates and 0 as the y-coordinate makes it move to the left
  * positive y-coordinates and 0 as the x-coordinate makes it move down
  * negative y-coordinates and 0 as the x-coordinate makes it move up
 
* To make the sprite jump, space or up can also be used
* Instead of using `varible.move`, it uses `variable.jump` and is a built in function
* I'm having a bit of trouble with jumping though, it jumps but it doesn't have a limit to how many times you can do this
* I tried testing this with `variable.grounded`, but this didn't work, I don't think I will use it anyway but it would be better to know
* I wonder why a lot of people use these variable with caps only, what changes if I use those?
* Next time, I think I'll try figuring out how scenes work

### 12/15/24:

* Figuring out hwo scenes work this time
* There doesn't seem to be a built in function to have a background be set
* I went to search on google and found that answer there: https://stackoverflow.com/questions/70559159/kaboom-js-how-to-set-the-background-to-an-image
* No function that has it, so it has to be added in as a game object like the rest
* I've found that when making a platform, in order for the sprite to stick, it needs `body({ isStatic: true })`
* I tried setting it to false and the character would not stick to it
* The `isStatic` also makes it so that the sprite doesn't go past it at all, sort of like a border
  
* With `isStatic` set to true:
  
* ![image](https://github.com/user-attachments/assets/8c9727da-aab5-43fe-ac3e-589cea941526)
  
* With `isStatic`set to false:
  
* ![image](https://github.com/user-attachments/assets/4068e653-7bc6-4b7e-a832-d824b8829609)

* I also found that when it's false, you can move the platform if you push it down
* Scenes can be planned out with maps
* If you make a planned out map with symbols, the symbols can be replaced with the sprites and obstacles
* All of this is then transferred onto the actual game
* I had some trouble with this, it didn't transfer onto the game, so I'm not sure if I got something wrong
* Next time I'll try practicing more with collisions

### 3/24/25

* Finding out about how 
* Went to the Kaplay Playground: https://play.kaplayjs.com/
* Found `onCollision()` function, didn't work the first times I used it
* The game object that's being destroyed has to be called "enemy" or it won't work
* The game object that's colliding with the other object has to be called "player" or it won't work as well
* When adding collisions, all the objects need the `area()` component or it won't work
* Adding 'destroy()' will make the game object disappear from the game, as shown below:

![image](https://github.com/user-attachments/assets/0180bff0-c6cb-4bf7-a4bb-2a4351a926f3)
![image](https://github.com/user-attachments/assets/32b6e64c-ef3e-47be-a16b-bacb0b64056f)
![image](https://github.com/user-attachments/assets/927bfedb-5072-4499-9f2c-6b43796e3859)

* Also found that using 'rand()' for x and y-coordinates will give it a random spot to go around the game
* Setting two numbers in the parenthesis will choose from between those two numbers, so it has a specific range the game object can go to, like below here:

![image](https://github.com/user-attachments/assets/e7201c22-e639-4fb8-8b07-03cd0b450db1)
![image](https://github.com/user-attachments/assets/85655618-8241-48d7-83b9-811f274b46ad)

* The block is able to move to different places now with `rand()`
* I still wonder why it didn't work with the normal name of the object?
* It seems to work fine for others with different names, so I wonder if it specifically only works with some names

### 3/28/25

* Created a game over scene
* Took another look at the Kaplay Playground to check how scenes work
* I didn't seem to be able to use scenes, but was able to make a game over scene another way
* When using the `onCollide()` function, you can also add text
* More than one game objects can be destroyed at once when using collisions
* However, it seems it'll only accept the player to be destroyed since it's defined
* I wonder if it's possible to destroy other game objects that aren't the player
* If another game object name is typed in, it won't work anymore
* Putting this together, will allow this to happen:

![image](https://github.com/user-attachments/assets/6c424142-99a7-4f25-b12b-f9b9054d12ae)
![image](https://github.com/user-attachments/assets/2bfb2b51-4bcd-40ff-958b-2cfb2dbadd9a)

* I learned that even without using scenes, there can be another way to make a game over screen
* Using what I learned to do with the game over scene, I made one for the winning screen
* Both ended up looking like this:

  ![image](https://github.com/user-attachments/assets/b3f47542-7619-4ba5-b06b-f02944427613)
  ![image](https://github.com/user-attachments/assets/1399f722-cddb-4448-bcb0-89a5e1371f92)

* For the next time, I'll add the background and sprites
* I'll try learning how to make sprites and be able to replace the current ones

### 4/19/25

* Not specifically coding, but I learned how to make a sprite sheets or just seperate sprites for the game
* https://procreate.com/ was what I used to be able to make my sprites
* https://www.youtube.com/watch?v=kFhnYYdhIo4 was the video that helped me make my sprites
* I learned a lot of simple tricks in order to make sprites more easier
* The smaller the sprites sizes are, the more easier it was to make smaller changes and make it appear as if the character were walking
* As you keep on going, there seems to be more copy and pasting with the sprites
* It showed me that sprites didn't necessarily have to be all that complicated
* I only kept running into an issue where when I flipped the sprites to make the other side, the pixels didn't match up
* In the lineart, sometimes one side had more pixels than the other, so I tried to fix that to the best I could
* I was able to finish the sprites without much problems after that
* All that I need to do next is import them onto the game and a background as well

### 4/20/25

* Now that I had my sprites, I was able to replace them with the provided sprites from kaboom
* Watched this video: https://www.youtube.com/watch?v=n-q0pKGhxyw&t=617s
* I didn't really get to understand a lot of the code, which was an issue
* In the video, other components and functions are mentioned, like `loadSpriteAtlas' and 'export function'
* When I tried setting up the first part of the code, it was able to load the sprite sheet, however, when I tried to play the idol animation: `(player.play('idle-down'))`, it said the `idle-down` animation wasn't a thing
* Tried seeing if maybe switching `loadSpriteAtlas` to `loadSprite` would do anything, but it didn't
* Wasn't sure where my error was, since I had made sure I made the idle animation
* Decided to use another method, found one here: https://stackoverflow.com/questions/76142448/how-to-switch-the-players-sprite-image-in-javascript-kaboom-js
* It's not very well used it seems, since sprite sheets are more used
* However, I tried this:

```
onKeyDown('right', () => {
    player.move(300, 0)
    player.use(sprite("player5"));
})
```
* When right key is pressed, the sprite changes, so I used this for the rest of the keys
* I was able to replace the default Kaboom sprite with my own and even the obstacles, as well
* I also finally found a background to use, which I was looking for
* I still wonder what went wrong when I tried to make my character move
* Did I need to do exactly everything in the video or was there another way where I didn't have to?
* I wonder if there's also other ways besides `player.use` to switch sprites?
* Next time I wanna see if I'm able to make each of the idle sprites stay in place after the character has stopped moving

<!-- 
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
* https://jslegenddev.substack.com/p/how-to-implement-one-way-platforms
-->
