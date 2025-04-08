import kaplay from "kaplay";
import "kaplay/global";

const k = kaplay()

setGravity(1600);
 bean.jump();

k.loadSprite("bean", "sprites/bean.png")

const bean = add([
	sprite("bean"),
	pos(center()),
	health(5),
	body(),
	area(),
  ]);

//     k.add ([
// 	area(),
// 	body(),
// 	k.sprite("bean"),
// 	scale(3),
//    rotate(190),
//   color(0, 0, 255),
// ])

// // putting together our player character
// const bean = add([
//     sprite("bean"),
//     pos(80, 500),
//     area(),
//     body(),
// ])

// // .jump() when "space" key is pressed
// onKeyPress("space", () => {
//     bean.jump()
// })

add([
    rect(width(), 48),
    pos(0, height(), 48),
    outline(7),
    area(),
    body({ isStatic: true }),
    color(127, 200, 255),
])

// k.onClick(() => k.addKaboom(k.mousePos()))
