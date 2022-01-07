'use strict'

var dob = new Date("04/11/2003")
var month_diff = Date.now() - dob.getTime()
var age_dt = new Date(month_diff)   
var year = age_dt.getUTCFullYear()
var age = Math.abs(year - 1970)
document.getElementById("usia").innerHTML = age

const switcher = document.querySelector('.btn-theme')
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
})