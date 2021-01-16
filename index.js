
async function changeMenuHeight(){
    document.getElementsByClassName('menu')[0].style.height = `${$(document).height()}px`

    console.log(document.getElementsByClassName('menu')[0].style.height)
}

function changePage(num){
    // 1 is home
    // 2 is commands

    if(num === 1){
        //home

        let cmds = document.getElementsByClassName('cmd')
        let cmdsCat = document.getElementsByClassName('cmd_cat')

        for(var i = 0;i < cmds.length;i++){
            cmds[i].style.fontSize = '0px'
        }

        for(var i = 0;i < cmdsCat.length;i++){
            cmdsCat[i].style.fontSize = '0px'
        }

        document.getElementById('home').style.color = 'rgb(219, 69, 69)'
        document.getElementById('commands').style.color = 'white'

        document.getElementsByClassName('home_page')[0].style.visibility = 'visible'
        document.getElementsByClassName('commands_page')[0].style.visibility = 'hidden'

        changeMenuHeight()
    } else

    if(num === 2){
        //commands
        let cmds = document.getElementsByClassName('cmd')
        let cmdsCat = document.getElementsByClassName('cmd_cat')

        for(var i = 0;i < cmds.length;i++){
            if(
            $(document).width() < 801 &&
            $(document).width() > 544
            ){
            cmds[i].style.fontSize = '35px'
            } else

            if(
            $(document).width() < 801 &&
            $(document).width() < 546
            ){
            cmds[i].style.fontSize = '30px'
            } else
            {
            cmds[i].style.fontSize = '35px'
            }
        }

        for(var i = 0;i < cmdsCat.length;i++){
            cmdsCat[i].style.fontSize = '50px'
        }

        document.getElementById('home').style.color = 'white'
        document.getElementById('commands').style.color = 'rgb(219, 69, 69)'

        document.getElementsByClassName('home_page')[0].style.visibility = 'hidden'
        document.getElementsByClassName('commands_page')[0].style.visibility = 'visible'

        changeMenuHeight()
    }
}

let running = false
function menu(op){
    let menu = document.getElementsByClassName('menu')[0]

    if(op === 'open'){
        if(running === true) return;

        document.getElementsByClassName('menu')[0].style.height = `${$(document).height()}px`

        running = true

        menu.style.visibility = 'visible'
        menu.classList.add('move-right-and-show-menu')

        setTimeout(() => {
        running = false
        menu.classList.remove('move-right-and-show-menu')
        }, 2000);

        document.getElementsByClassName('options')[0].classList.add('vis')

        setTimeout(() => {
            document.getElementsByClassName('options')[0].classList.remove('vis')
            document.getElementsByClassName('options')[0].style.opacity = '1'
        }, 1999);
    } else {
        if(running === true) return;

        document.getElementsByClassName('options')[0].classList.add('invis')

        setTimeout(() => {
            document.getElementsByClassName('options')[0].classList.remove('invis')
            document.getElementsByClassName('options')[0].style.opacity = '0'
        }, 400);

        menu.classList.add('move-left-and-hide-menu')
        running = true
        setTimeout(() => {
            menu.style.visibility = 'hidden'
            running = false
            menu.classList.remove('move-left-and-hide-menu')


            document.getElementsByClassName('menu')[0].style.height = `0px`
        }, 2000);
    }
}