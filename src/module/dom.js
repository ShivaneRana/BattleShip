import "./dom.css";

export const Render = (function(){

    function startScreen(){
        const div = document.createElement("div");
        div.classList.add("startScreen");
        document.body.append(div);
    }

    return {
        startScreen
    }

})();