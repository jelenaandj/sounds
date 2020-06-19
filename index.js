const board=document.querySelector('.board');
const pic=document.querySelector('img');
// let cat=document.querySelector('.cat');
const cards=board.children;

let card=[...cards]

card.forEach((card,index)=>{
    card.addEventListener('click',(e)=>{
        const audio=document.querySelector(`audio[index='${index}']`);
        audio.play();
        console.log(card.className);
        ///create label
        let title=document.createElement('label');
        title.className='title';
        title.innerText=card.className;
        card.appendChild(title)
        console.log('title',title);
        pic.blur;

        setTimeout(()=>{
            title.remove();
        },2000)
    });
});
