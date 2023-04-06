let boxes = Array.from($('.box'))
let currentPlayer = 'O'

function xWins () {
    if (($(boxes[0]).text()== 'X' && $(boxes[1]).text()== 'X' && $(boxes[2]).text()) == 'X' || 
        ($(boxes[3]).text()== 'X' && $(boxes[4]).text()== 'X' && $(boxes[5]).text()) == 'X' ||
        ($(boxes[6]).text()== 'X' && $(boxes[7]).text()== 'X' && $(boxes[8]).text()) == 'X' ||
        ($(boxes[0]).text()== 'X' && $(boxes[3]).text()== 'X' && $(boxes[6]).text()) == 'X' ||
        ($(boxes[1]).text()== 'X' && $(boxes[4]).text()== 'X' && $(boxes[7]).text()) == 'X' ||
        ($(boxes[2]).text()== 'X' && $(boxes[5]).text()== 'X' && $(boxes[8]).text()) == 'X' ||
        ($(boxes[0]).text()== 'X' && $(boxes[4]).text()== 'X' && $(boxes[8]).text()) == 'X' ||
        ($(boxes[2]).text()== 'X' && $(boxes[4]).text()== 'X' && $(boxes[6]).text()) == 'X' )
    alert ('X Wins')
}

function oWins () {
    if (($(boxes[0]).text()== 'O' && $(boxes[1]).text()== 'O' && $(boxes[2]).text()) == 'O' || 
        ($(boxes[3]).text()== 'O' && $(boxes[4]).text()== 'O' && $(boxes[5]).text()) == 'O' ||
        ($(boxes[6]).text()== 'O' && $(boxes[7]).text()== 'O' && $(boxes[8]).text()) == 'O' ||
        ($(boxes[0]).text()== 'O' && $(boxes[3]).text()== 'O' && $(boxes[6]).text()) == 'O' ||
        ($(boxes[1]).text()== 'O' && $(boxes[4]).text()== 'O' && $(boxes[7]).text()) == 'O' ||
        ($(boxes[2]).text()== 'O' && $(boxes[5]).text()== 'O' && $(boxes[8]).text()) == 'O' ||
        ($(boxes[0]).text()== 'O' && $(boxes[4]).text()== 'O' && $(boxes[8]).text()) == 'O' ||
        ($(boxes[2]).text()== 'O' && $(boxes[4]).text()== 'O' && $(boxes[6]).text()) == 'O' )
    alert ('O Wins')
}


$(boxes[0]).on('click',function(){
    if ($(this).text() == ''){
        $(this).text(currentPlayer) 
    } else {
        return false
    }
    if (currentPlayer === 'O'){
            currentPlayer = 'X'
    } else {
            currentPlayer = 'O'
    }xWins();oWins();draw()
    }
)

$(boxes[1]).on('click',function(){
    if ($(this).text() == ''){
        $(this).text(currentPlayer) 
    } else {
        return false
    }
    if (currentPlayer === 'O'){
            currentPlayer = 'X'
    } else {
            currentPlayer = 'O'
    }xWins();oWins();draw()
    }
)
$(boxes[2]).on('click',function(){
    if ($(this).text() == ''){
        $(this).text(currentPlayer) 
    } else {
        return false
    }
    if (currentPlayer === 'O'){
            currentPlayer = 'X'
    } else {
            currentPlayer = 'O'
    }xWins();oWins();draw()
    }
)
$(boxes[3]).on('click',function(){
    if ($(this).text() == ''){
        $(this).text(currentPlayer) 
    } else {
        return false
    }
    if (currentPlayer === 'O'){
            currentPlayer = 'X'
    } else {
            currentPlayer = 'O'
    }xWins();oWins();draw()
    }
)
$(boxes[4]).on('click',function(){
    if ($(this).text() == ''){
        $(this).text(currentPlayer) 
    } else {
        return false
    }
    if (currentPlayer === 'O'){
            currentPlayer = 'X'
    } else {
            currentPlayer = 'O'
    }xWins();oWins();draw()
    }
)
$(boxes[5]).on('click',function(){
    if ($(this).text() == ''){
        $(this).text(currentPlayer) 
    } else {
        return false
    }
    if (currentPlayer === 'O'){
            currentPlayer = 'X'
    } else {
            currentPlayer = 'O'
    }xWins();oWins();draw()
    }
)
$(boxes[6]).on('click',function(){
    if ($(this).text() == ''){
        $(this).text(currentPlayer) 
    } else {
        return false
    }
    if (currentPlayer === 'O'){
            currentPlayer = 'X'
    } else {
            currentPlayer = 'O'
    }xWins();oWins();draw()
    }
)
$(boxes[7]).on('click',function(){
    if ($(this).text() == ''){
        $(this).text(currentPlayer) 
    } else {
        return false
    }
    if (currentPlayer === 'O'){
            currentPlayer = 'X'
    } else {
            currentPlayer = 'O'
    }xWins();oWins();draw()
    }
)
$(boxes[8]).on('click',function(){
    if ($(this).text() == ''){
        $(this).text(currentPlayer) 
    } else {
        return false
    }
    if (currentPlayer === 'O'){
            currentPlayer = 'X'
    } else {
            currentPlayer = 'O'
    }xWins();oWins();draw()
    }
)

$('button').on('click', function(){
    $('.box').text('')
    currentPlayer = 'O'
})