// make taps 
{
let arr_of_taps = Array.from(document.getElementsByClassName('Taps'));
console.log(arr_of_taps);

let arr_of_contents = [document.getElementsByClassName('Featured_Products')[0],
                       document.getElementsByClassName('New_Arrivals')[0],
                       document.getElementsByClassName('Most-viewed')[0]
                    ];
console.log(arr_of_contents);

arr_of_taps.forEach((tap,index) => {
    tap.addEventListener('click', () => {
        arr_of_contents.forEach((content,index_of_content) => {
            if(index == index_of_content){
                content.classList.remove('disabled')
            }else{
                content.classList.add('disabled')
            }
        })
        tap.classList.add('active');
        arr_of_taps.forEach((tap,index_of_tap) => {
            if(index != index_of_tap){
                tap.classList.remove('active');
            }
        })
    })
})
}
// make the hover effect on the products
{
    let arr_of_products = Array.from(document.getElementsByClassName('product'));
    console.log(arr_of_products);
    
    arr_of_products.forEach((product) => {
        let product_facilities = product.getElementsByClassName('facilities')[0];
        console.log(product_facilities);
        
        product.addEventListener('mouseover', () => {
            product_facilities.classList.remove('fadeOut');
            product_facilities.classList.add('fadeIn');
            
        })
        product.addEventListener('mouseout', () => {
            product_facilities.classList.remove('fadeIn');
            product_facilities.classList.add('fadeOut');
            
        })
    })
}