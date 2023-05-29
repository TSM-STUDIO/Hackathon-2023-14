document.addEventListener('DOMContentLoaded', () =>{
    const select = document.querySelectorAll('.select');
    
    select.forEach(el =>{
        el.addEventListener('click', () =>{

            select.forEach(elem =>{
                if(elem != el){
                    elem.classList.remove("select--active");
                }
            })


            const inputText = el.querySelector('.select__text');
            const itemsContainer = el.querySelector('.select__items');
            const items = el.querySelectorAll('.select__item')

            el.classList.toggle("select--active")

            if(el.classList.contains('select--active')){
                // Animations
                itemsContainer.style.maxHeight = itemsContainer.scrollHeight + 'px';

            }else{
                // Animations
                itemsContainer.style.maxHeight = null;
            }

            items.forEach(item =>{
                item.addEventListener('click', () =>{
                    items.forEach(item =>{
                        item.classList.remove("select__item--active");
                    })
                    item.classList.add("select__item--active");

                    inputText.innerHTML = item.innerHTML;
                })
            })
        })
    })


    // cart territory

    containerMap = document.querySelector(".calculate__map");
    inputMap = containerMap.querySelector(".select .select__text")
    selectMap = containerMap.querySelector(".select__map")

    itemsMap = selectMap.querySelectorAll(".calculate__object")

    itemsMap.forEach((itemMap) =>{
        itemMap.addEventListener("click", () =>{
            switch(itemMap.id){
                case 'select__north':
                    inputMap.innerHTML = "СЕВЕРНЫЙ А.О"
                break;
                case 'select__northeastern':
                    inputMap.innerHTML = "СЕВЕРО-ВОСТОЧНЫЙ А.О"
                break;
                case 'select__east':
                    inputMap.innerHTML = "ВОСТОЧНЫЙ А.О"
                break;
                case 'select__southeast':
                    inputMap.innerHTML = "ЮГО-ВОСТОЧНЫЙ А.О"
                break;
                case 'select__southern':
                    inputMap.innerHTML = "ЮЖНЫЙ А.О"
                break;
                case 'select__southwest':
                    inputMap.innerHTML = "ЮГО-ЗАПАДНЫЙ А.О"
                break;
                case 'select__west':
                    inputMap.innerHTML = "ЗАПАДНЫЙ А.О"
                break;
                case 'select__northwest':
                    inputMap.innerHTML = "СЕВЕРО-ЗАПАДНЫЙ А.О"
                break;
                case 'select__central':
                    inputMap.innerHTML = "ЦЕНТРАЛЬНЫЙ А.О"
                break;
               
                

            }
        })
    })

})
