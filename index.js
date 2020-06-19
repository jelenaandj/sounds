const board=document.querySelector('.board');
// let cat=document.querySelector('.cat');
const cards=board.children;

let card=[...cards]

card.forEach((card,index)=>{
    card.addEventListener('click',(e)=>{
        const pic=document.querySelector(`img[index='${index}']`);
        const audio=document.querySelector(`audio[index='${index}']`);
        audio.play();
        console.log(card.className);
        ///create label
        let title=document.createElement('label');
        title.className='title';
        title.innerText=card.className.toUpperCase();
        card.appendChild(title);
        pic.style='filter:blur(5px)';
        console.log('title',title);

        setTimeout(()=>{
            title.remove();
            pic.style='none';
        },2000)
    });
});
