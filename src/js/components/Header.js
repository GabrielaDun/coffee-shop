
class Header {
  constructor(){
    const thisHeader = this;

    thisHeader.drawATitle();
  }
  drawATitle(){

    const randomNumber = Math.floor(Math.random() * 3 + 1)-1;

    const titlesWrapper = document.querySelectorAll('.page-title-main');
    for (let title in titlesWrapper){
        if (title == randomNumber){
            const chosenTitle = titlesWrapper[title];
            chosenTitle.classList.add('active');
        }
    }
  }
} 

export default Header;