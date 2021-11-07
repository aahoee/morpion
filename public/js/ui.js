const APP_ID = "game"
const APP_ELMT = $(`#${APP_ID}`)
const ROUND_ELMT =  '<p class="round">O</p>'
const CROSS_ELMT =  '<p class="cross">X</p>'
const UI_CLASS_TAB = [
    "bb br center","bb br center","bb center",
    "bb br center","bb br center","bb center",
    "br center","br center","center"
]
const TYPE = {
    CROSS: "CROSS",
    ROUND: "ROUND",
    EMPTY: "EMPTY"
}
const GAME = [
    TYPE.EMPTY, TYPE.EMPTY, TYPE.EMPTY,
    TYPE.EMPTY, TYPE.EMPTY, TYPE.CROSS,
    TYPE.EMPTY, TYPE.ROUND, TYPE.EMPTY,
]

function getDivByType(type){
    var html = ""
    switch (type){
        case TYPE.CROSS:
            html = CROSS_ELMT
            break;
        case TYPE.ROUND:
            html = ROUND_ELMT
            break;
    }
    return html
}

//Init du plateau avec les class est un ID
var str = ""
for (let id = 0; id < UI_CLASS_TAB.length; id++) {
    str += `<div class="item ${UI_CLASS_TAB[id]}" id="${id}">${getDivByType(GAME[id])}</div>`
}
APP_ELMT.html(str)


$(function() {
    $(document).on("click",".item",(elm) =>{
        $(`#${elm.currentTarget.id}`).html(CROSS_ELMT)
    })
})