document.addEventListener('DOMContentLoaded', () =>{
    const downloadBtn = document.querySelector('.download__btn');
    
    downloadBtn.addEventListener('click', () =>{

        const downloadText = downloadBtn.querySelector('span');
        
        downloadBtn.classList.add("download__btn--active")

        if(downloadBtn.classList.contains('download__btn--active')){
            // Animations
            downloadText.style.maxHeight = downloadText.scrollHeight + 'px';
        }
    })


})
