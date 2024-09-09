class Modal{
    constructor() {
        this.wrapper = null;
    }
    static render(content) {
        const modalWindow = document.createElement('div');
        const modalWrapper = document.createElement('div');
     
        modalWrapper.classList.add('modal-wrapper');
        modalWindow.classList.add('modal-window');
  
        modalWindow.append(content);
        modalWrapper.append(modalWindow);
        
        return modalWrapper
    }
    close() {
        this.wrapper.remove();
    }
    open(content) {
        this.wrapper = Modal.render(content)
        document.body.appendChild(this.wrapper);
    }
}














