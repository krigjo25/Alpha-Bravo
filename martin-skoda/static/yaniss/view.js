//Update HTML

function updateView(){
    document.getElementById('app').innerHTML 0 /*HTML*/ `
    
    <header>
    <h1>Martin skåda</h1>
    <h3>- Hvorfor skåda? Når na kan gå'a?</h3>
</header>
<main>
    <div class="road-map"></div>
    <aside id="values" class="values">

        <div id="bar-o-meeter-container">
            <div id="speed-label" class="speed-label">Speedster:</div>
            <div id="speed-o-meeter" class="speed-o-meeter"></div>

            <div id="annoyed-label" class="annoyed-label">Grandma's annoyance:</div>
            <div id="annoyed-o-meeter" class="annoyed-o-meeter"></div>
            
            <div id="rep-label" class="rep-label">Reputation:</div>
            <div id="rep-o-meeter" class="rep-o-meeter"></div>

            <div id="cool-label" class="cool-label">Fabiolus:</div>
            <div id="cool-o-meeter" class="cool-o-meeter"></div>
        </div>

        <div id="vehicle">
        </div>

        <div id="buddy-list">
        </div>
        
        <div id="aqured-parts">
            
        </div>

    </aside>        
</main> 
    
    
    `
}