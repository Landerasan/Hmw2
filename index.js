#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const readline = require("readline");
const { stdin, stdout } = require('process')


let filePath = '';

let random = Math.floor(Math.random() * 101)

process.stdin.on('data', (input) => {
    play(input)
})

const argvs = yargs(hideBin(process.argv))
    .command(['start'], 'type to start', {}, () => {
        start()
    }).argv

function start() {
    console.log('\nЗагадано число в диапазоне от 0 до 100\n')
}

function play(input){
    if(input == random){
        console.log(`Вы победили! Загаданное число было ${random}`)
        console.log('\nЗагадано число в диапазоне от 0 до 100\n')
        random = Math.floor(Math.random() * 101)
    }
    else if(input > random){
        console.log('Меньше')
    }
    else if(input < random){
        console.log("Больше")
    }
}