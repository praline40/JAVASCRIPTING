function controle(value)
{
   
    if (value===0){
        alert('Je vous sens comme tiraillé');
    }else if(value===1){
        alert('Une montagne de patates dans ta console !');
        let s='';
        for(let i=1; i<=7; i++){
            for(j=1;j<=i;j++){
                s+='#'; 
            }
            console.log(s+'\n');
            s='';
        }
    }else{
        alert('non?? oh quel dommage...');
    }
}