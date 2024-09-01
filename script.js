let displayinput='';

function display(value){
    displayinput+=value;
    document.getElementById('input').value=displayinput;
}

function calculate(){
    try{
        displayinput=eval(displayinput)
        document.getElementById('input').value=displayinput;
    } catch(error){
        document.getElementById('input').value='ERROR';
    }

}
function cleardisplay(){
    displayinput="";
    document.getElementById('input').value="";
}