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
// make the account hover mak action 
{
    let list_of_my_account = document.getElementById('my_account');
    let account_sub_menu = document.getElementById('account_sub_menu');
    console.log(list_of_my_account,account_sub_menu);
    
    list_of_my_account.addEventListener('mouseover', () => {
        account_sub_menu.classList.remove('liftUp');
        account_sub_menu.classList.add('dropDown');
    })
    account_sub_menu.addEventListener('mouseout', () => {
            account_sub_menu.classList.remove('dropDown');
        account_sub_menu.classList.add('liftUp');
        
    })

    let list_of_lists_container = Array.from(document.getElementsByClassName('sub_menu_container'));
    let list_of_lists = Array.from(document.getElementsByClassName('sub_menu'));

    console.log(list_of_lists_container, list_of_lists);


    list_of_lists_container.forEach((container,index) => {
        console.log(container,index);
        
        container.addEventListener('mouseover', () => {
            console.log('hovered', list_of_lists[index]);
            list_of_lists[index].classList.remove('liftUp');
            list_of_lists[index].classList.add('dropDown');
            
        })
        console.log(1);
    })
    list_of_lists_container.forEach((container,index) => {
        container.addEventListener('mouseout', () => {
            list_of_lists[index].classList.remove('dropDown');
            list_of_lists[index].classList.add('liftUp');
        })
    })

}
// make the slider image
{
    let img = document.getElementById('slider_img');
    let arr_of_navigators = document.getElementsByClassName('navigator');
    // It is supposed to be an array of images that comes form backend but for now I will use this array
    let arr_of_images = ['images/main.webp','images/slider2.jpg'];
    for(let i = 0; i < arr_of_images.length; i++){
        if(arr_of_images[i].src == img.src){
            for(let counter_for_navigator = 0; counter_for_navigator < arr_of_navigators.length; counter_for_navigator++){
                if(counter_for_navigator == i){
                    arr_of_navigators[counter_for_navigator].classList.add('active');
                }else{
                    arr_of_navigators[counter_for_navigator].classList.remove('active');
                }
            }
        }
    }  // runs the navigator with respect to the imgs

    
}