input.onButtonPressed(Button.A, function () {
    count += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(count)
})
input.onButtonPressed(Button.B, function () {
    count += -2
})
input.onGesture(Gesture.Shake, function () {
    count = 0
    basic.showNumber(count)
})
let count = 0
count = 1
basic.forever(function () {
	
})
