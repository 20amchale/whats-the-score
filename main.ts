let score_a = 0
input.onButtonPressed(Button.A, function () {
    score_a += 1
    basic.showNumber(0 + score_a)
})
input.onButtonPressed(Button.AB, function () {
    score_a += 3
    basic.showNumber(0 + score_a)
})
input.onButtonPressed(Button.B, function () {
    score_a += 2
    basic.showNumber(0 + score_a)
})
basic.forever(function () {
	
})
