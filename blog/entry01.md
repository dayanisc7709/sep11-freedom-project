# Entry 1: How I decided my tool (Kaboom.js)
##### 10/27/24

# Choosing my tool
During the class, we were expected to pick a tool to choose from the list Mr. Mueller had given us. Whatever tool we picked would be what we used for our Freedom Project. The tool I picked from the list was Kaboom.js. I thought about what I wanted to make. Initially, I wanted to make something for drawing, like animating. So at first, I had wanted to use [Two.js](https://two.js.org/) or [Anime.js](https://animejs.com/) for that reason. They seemed pretty difficult to me though, so I changed my mind. I couldn't really understand the website, so I felt like changing or going to another idea would be better and easier for me. Now what I had in mind was that I wanted to make a game, so there were some options, like kaboom.js, phaser, impact, etc. From these, I thought kaboom.js looked more promising than the rest, so I checked it out for a bit. There was a playground that allowed you to mess with the functions of kaboom.js, but I also needed a backup tool just in case I didnñt like the one I picked. My backup was [Phaser](phaser.io), but I stuck to Kaboom.js since I tried it out for a bit, but I still didn't get it. The [playground](https://kaboomjs.com/play?example=add) in Kaboom.js had exactly what I needed for my game that I wanted to make, plus I thought I could learn about it, so I picked that tool.

# How I've tinkered with my tool
Now that I've picked my tool, I had tinker with it and mess around with anything that I wanted to use it for. Firstly, I tried to learn about the gravity and how it works in the game. So I went to the playground and clicked on an option that said [gravity](https://kaboomjs.com/play?example=gravity). At the top, it said `setGravity(1600)`, which I assumed 1600 was the default value. I tried changing the number a few times, like to 1800 and 1400. I found out that if it's set to a higher number than 1600, the sprite jumps lower. If it's set to a number lower than 1600, the sprite jumps higher. Another thing I did was to put Kaboom.js in my IDE, which I was having trouble with. That made it easier to tinker with my tool, since now I wouldn't have to keep going back to the playground and now whatever I do is saved. Some things I did was changing parameters, which I did, like in this code:

```js
k.add([
	k.pos(120, 80),
	k.sprite("bean"),
	scale(3),
   rotate(190),
  color(0, 0, 255),
])
```

Changing the 'k.pos' is how you change the position of your sprite. The first parameter is the x-coordinate and the second parameter is the y-coordinate. So this works like how a graph does. When I changed the scale number, it changed sizes. Bigger number is a bigger size and smaller number is a smaller size. When I changed the rotation, there seemed to be a pivot point at the upper left corner and when I kept changing the number, it eventually went out of the map where I couldn't see it. Another thing I did was learn that after setting gravity, there's something you need to write in order for sprites to stay on a base. First, I made my base, which was a rectangle and then after that, I added `body({ isStatic: true })`, since I was following a tutorial. I wondered what happened if I changed it to false, and when I did that, the sprite that was on the base just fell, along with the rectangle. So if I don't write true, everything falls down.

# What I'm planning to make
I'm still not sure what to make, I wanted to make a 2D rpg (Roleplaying game), but I'm not sure what plot there should be or what characters I use. I'm thinking of either making up some characters to use for the game or I'll just use some characters from one of my favorite medias. Then, whatever I pick I'll base the plot on whatever the plot is from the media I picked.

# Engineering Design Process
Right now, I think I'm at step 4 of the EDP (Enginnering design process) that was me thinking about what tool to use. But now that I have the idea of what I'm gonna make, I need to figure out how I'll actually make the game. I need a plan of how I'll start the process of making my game, so that's why I think I'm on step 4 or possibly step 5 of the process.

# Skills

## How to learn


## Time Management

[Next](entry02.md)

[Home](../README.md)
