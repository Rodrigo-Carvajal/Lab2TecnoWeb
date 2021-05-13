//Script que entrega
function objLocation(){
    document.write("El link de la pagina es "+ location.href +"<br>"+"El protocolo de la pagina es "+ location.protocol)
}
//Script que entrega el sistema operativo del usuario.
function sistOper(){
    var NombreSO="No se púdo obtener el sistema operativo o es desconocido";
    if (navigator.appVersion.indexOf("Win")!=-1) 
        NombreSO="Windows";
    if (navigator.appVersion.indexOf("Ubuntu")!=-1) 
        NombreSO="Ubuntu";
    if (navigator.appVersion.indexOf("Linux")!=-1) 
        NombreSO="Linux";
    if (navigator.appVersion.indexOf("Mac")!=-1) 
        NombreSO="MacOS";
    if (navigator.appVersion.indexOf("Android")!=-1) 
        NombreSO="Android";

    document.write("El sistema operativo que estas usando es: "+NombreSO);
}
    
//Script que entrega la resolucion de la pantalla del usuario. 
function resUser(){
    document.write("La resolución de tu pantalla es: "+ screen.width +" de ancho x "+ screen.height +" de alto."); 
    document.write("<br>Además, la resolucion de la ventana que estas visualizando es:"+ screen.availWidth +" de ancho x"+ screen.availHeight +" de alto.")
}
//Script que crea el objeto
function objeto(){
    var Cafe ={
        marca : 'Nescafe',
        tipo : 'descafeinado',
        cantidad : '200 gr',
        mostrarObjeto : function(){
            document.write("El objeto incial es un tarro de cafe "+ Cafe.tipo +" de marca "+ Cafe.marca +" de "+ Cafe.cantidad);
        },
        modificarObjeto : function(){
            alert("funciona");
        }
    };
    Cafe.mostrarObjeto();   
}       