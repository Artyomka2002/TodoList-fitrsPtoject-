class Collapse {
    constructor(list) {
        this.list = list;
    }
    render() {
        const container = document.createElement('div');
      
        for (let i = 0; i < this.list.length; i++) {
            const element = this.list[i];
            // const {text,title} = element
            const topInfo = document.createElement('div');

            const topInfo1 = document.createElement('div');
            const topInfo2 = document.createElement('div');

            container.classList.add('topInfo');
            topInfo2.classList.add('bottom-topInfo2');
            topInfo1.classList.add('top-topInfo1');

            topInfo.classList.add('block-reading');

            topInfo1.textContent = element.text;
            topInfo2.append(element.title);

            topInfo.append(topInfo1)
            topInfo.append(topInfo2)
            container.append(topInfo)

            topInfo2.classList.add('active_i');

            topInfo1.addEventListener('click' , function(){
               topInfo2.classList.toggle('active_i');
            })

    }
    return container
}
}





