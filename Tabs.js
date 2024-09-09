class Tabs {
    constructor(tubs) {
        this.tubs = tubs
        this.activeTab
    }
    render() {
        const containerWrapper = document.createElement('div');
        const container = document.createElement('div');
        const labels = document.createElement('div');
        const contents = document.createElement('div');

        contents.classList.add('contents')
        container.classList.add('containerSlider')
        containerWrapper.classList.add('containerSliders')
        labels.classList.add('lables');
        labels.style.display = 'flex';
        
        for (let i = 0; i < this.tubs.length; i++) {
            const tab = this.tubs[i];
            const label = document.createElement('div');
            label.classList.add('tab-lable');
            if (i == 0) {
                label.classList.add('lable-bottom')
            }
            label.textContent = tab.title;
            label.id = Math.random();

            const tabContent = document.createElement('div');
            tabContent.append(tab.children) 
            tabContent.classList.add('tab' + i);
            tabContent.classList.add('tab');
            tabContent.id = tab.key;
            tabContent.style.color = '#18191C';

            labels.append(label);
            contents.append(tabContent);
            headerContainer.append(labels)
            container.append(contents);
            containerWrapper.append(container);
             
            if (i > 0) {
                tabContent.style.display = 'none';
            }
            label.addEventListener('click', () => {
                const result = document.querySelectorAll('.tab');
                const resultTab = document.querySelectorAll('.tab-lable');
                resultTab.forEach((item) => {
                    if (item.id == label.id) {
                        item.classList.add('lable-bottom');
                    } else {
                        item.classList.remove('lable-bottom');
                    }
                })
                result.forEach((item) => {
                    if (item.id == tab.key) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none'
                    }
                })
            })
        }
        return containerWrapper;
    }
}

