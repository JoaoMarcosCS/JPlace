
const html = document.querySelector("html")
const checkbox=document.querySelector("input[name=theme]")

/*FUNÇÃO PARA PEGAR AS VARIÁVEIS CSS */
const getStyle=(element, style)=>
    window.getComputedStyle(element).
        getPropertyValue(style)

/*OBJETO QUE CONTÉM AS CORES INICIAIS(LIGHT MODE) 
-É PRECISO QUE AS VARIAVEIS TENHAM O MESMO NOME DAS VARIAVEIS DO CSS
*/
const initialColors={
    /* pega a váriavel --bg do css*/
    detalhesPrimario:getStyle(html,"--detalhes-primario"),
    detalhesSecundario:getStyle(html,"--detalhes-secundario"),
    backgroundPrimario:getStyle(html,"--background-primario"),
    backgroundSecundario:getStyle(html,"--background-secundario"),
    textoPrimario:getStyle(html,"--texto-primario"),
    contornoTexto:getStyle(html,"--contorno-texto")
    /*--detalhes-1:#00d5ff;
    --background-1:#f0f2f5;
    --background-2:#ffffff;
    --detalhes-2:#230b4d;
    --texto-1:#1b1a1c;*/
   
    
}
console.log(initialColors)
/*OBJETO QUE CONTÉM AS CORES DO DARK MODE 
-É PRECISO QUE AS VARIAVEIS TENHAM O MESMO NOME DAS VARIAVEIS DO CSS
*/

const darkMode={
/* pega a váriavel --bg do css*/
    
    detalhesPrimario:"#00ff88",//verde-claro
    detalhesSecundario:"#230b4d",
    backgroundPrimario:"#1f1e1b",//preto + claro
    backgroundSecundario:"#141311",//preto + escuro
    textoPrimario:"#f7f7f5",//branco
    contornoTexto:"#fc4f05"//roxo
   
}

console.log(darkMode)
const transformKey = key =>
        "--"+key.replace(/([A-Z])/,"-$1").toLowerCase()


const changeColors=(colors)=>{
    Object.keys(colors).map(key=>
        html.style.setProperty(transformKey(key),colors[key])
        
        )
        console.log(html.style)


}

checkbox.addEventListener("change",({target})=>{
    target.checked ? changeColors(darkMode) : changeColors(initialColors)

})