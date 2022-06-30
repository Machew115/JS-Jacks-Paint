function configureListeners() {
    let images = document.getElementsByTagName('img') 


     for(var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)        
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false) 
    } 
}

function addOpacity(event) {
    if(!this.classList.contains('dim')){
        this.classList.add('dim');
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     if(this.classList.contains('dim')){
        this.classList.remove('dim');
     }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            price = '$12.99'
            colorName = 'lime Green'
            updatePrice(colorName, price)     
            break;           
        case 'pn2':
            price = '$24.99' 
            colorName = 'hazel nut'
            updatePrice(colorName, price)   
            break;            
        case 'pn3':
            price = '$32.45' 
            colorName = 'black'
            updatePrice(colorName, price)    
            break;   
        case 'pn4':
            price = '$27.99' 
            colorName = 'torquise'
            updatePrice(colorName, price)    
            break;   
        case 'pn5':
            price = '$12.44' 
            colorName = 'burnt rust'
            updatePrice(colorName, price)         
            break;   
        case 'pn6':
            price = '$23.55' 
            colorName = 'deadspace red'
            updatePrice(colorName, price)          
            break;   
        case 'pn7':
            price = '$15.88' 
            colorName = 'fallengrace white'
            updatePrice(colorName, price)   
            break;   
        case 'pn8':
            price = '$18.67' 
            colorName = 'rusted orange'
            updatePrice(colorName, price)     
            break;   
        case 'pn9':
            price = '$37.99' 
            colorName = 'Royal Blue'
            updatePrice(colorName, price)   
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;
        
        let color = document.getElementById('color-name');
        color.textContent = colorName;
    }
    
}
