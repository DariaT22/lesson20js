alert ('js runs');


//lesson7

let Teapot=function (power){
    this.power=2000;
    this.volume=3500;
    this.status=false;
    this.enable=function(){
        this.status=true;
        this.power=power||0;
    }
    this.disable=function(){
        this.status=false;
    }
    this.getStatus=function(){
        return status;
    }
}
    let teapot= new Teapot(2000);
    console.log(teapot);
    teapot.enable();
    console.log(teapot.status);



//lesson10

let bigTeapot={
    color:'red',
    print:'dotted'
};
bigTeapot.__proto__=teapot;
console.log(bigTeapot);


//additional task ????????????????

{
    let object=function(){

        this.createTag=function(tag){
            let h1=document.createElement('h1');
            h1.innerHTML='Page header';
            document.body.appendChild(h1);
           
        }
       
    }
}