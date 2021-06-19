var imgYd = document.getElementById('imgBox')
var imgBoxk = document.getElementById('imgShow')

var pic
var j = 1
var k = 0;
var i

var two
var stop = setInterval(function() {
	timer()
}, 3000)

function timer() {
	two = setInterval(time2, 1)
	clearInterval(stop)

}

function time2() {
	k = 20 * -j
	i = k + 'px'
	if (k <= -6080) {
		j = 0
	} else {
		j++
	}
	imgYd.style.left = i
	if (k == -1520 || k == -3040 || k == -4560 || k == -6080) {
		clearInterval(two)
		stop = setInterval(function() {
			timer()
		}, 3000)
	}
}
//时钟轮播

function but1() {
	active(0, 0)
}

function but2() {
	active(1520, 76)
}

function but3() {
	active(3040, 152)
}

function but4() {
	active(4560, 228)
}
//圆按钮

function leftBut() {
	clearInterval(two)
	clearInterval(stop)
	clearInterval(pic)
	if (k == 0) {
		but2()
	} else if (k == -1520) {
		but3()
	} else if (k == -3040) {
		but4()
	} else if (k == -4560) {
		j = 228
		pic = setInterval(function() {
			k = 20 * -j
			i = k + 'px'
			if (k <= -6080) {
				clearInterval(pic)
			} else {
				j++
			}
			imgYd.style.left = i
		}, 1)

	} else {
		j = 0
		k = 20 * -j
		i = k + 'px'
		imgYd.style.left = i
		but2()
	}
}

function rightBut() {
	clearInterval(two)
	clearInterval(stop)
	clearInterval(pic)
	if (k == 0) {
		j = 304
		pic = setInterval(function() {
			k = 20 * -j
			i = k + 'px'
			if (k < -4560) {
				j--
			} else {
				clearInterval(pic)

			}
			imgYd.style.left = i
		}, 1)
	} else if (k == -1520) {
		but1()
	} else if (k == -3040) {
		but2()
	} else if (k == -4560) {
		but3()

	} else {
		j = 0
		k = 20 * -j
		i = k + 'px'
		imgYd.style.left = i
		but2()
	}
}

function btnColor() {
	var but1Color = document.getElementById('btn1')
	var but2Color = document.getElementById('btn2')
	var but3Color = document.getElementById('btn3')
	var but4Color = document.getElementById('btn4')

	if (k <= 0 && k > -1520 || k <= -6080) {
		but1Color.style.backgroundColor = 'red'
	} else {
		but1Color.style.backgroundColor = 'white'
	}
	if (k <= -1520 && k > -3040) {
		but2Color.style.backgroundColor = 'red'
	} else {
		but2Color.style.backgroundColor = 'white'
	}
	if (k <= -3040 && k > -4560) {
		but3Color.style.backgroundColor = 'red'
	} else {
		but3Color.style.backgroundColor = 'white'
	}
	if (k <= -4560 && k > -6080) {
		but4Color.style.backgroundColor = 'red'
	} else {
		but4Color.style.backgroundColor = 'white'
	}
}

setInterval(btnColor, 1)

function active(left, tab) {
	clearInterval(two)
	clearInterval(stop)
	clearInterval(pic)
	pic = setInterval(function() {

		if (k > -left) {
			k = k - 40
			i = k + 'px'
			imgYd.style.left = i

		} else if (k < -left) {
			k = k + 40
			i = k + 'px'
			imgYd.style.left = i
		} else {
			j = tab

			clearInterval(pic)

			stop = setInterval(function() {
				timer()
			}, 1000)
		}
	}, 1)

}

function bannerBtnShow(){
	var leftBtnShow = document.getElementById('leftBtn')
	var rightBtnShow = document.getElementById('rightBtn')
	leftBtnShow.style.height = '100%'
	rightBtnShow.style.height = '100%'
}

function bannerBtnHidden(){
	var leftBtnHidden = document.getElementById('leftBtn')
	var rightBtnHidden = document.getElementById('rightBtn')
	leftBtnHidden.style.height = '0%'
	rightBtnHidden.style.height = '0%'
}