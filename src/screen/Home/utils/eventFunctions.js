export const onClick = (hs, click) => (e) => {
    if (hs.clicking) {

        if (e.target.className.indexOf('inspect') >= 0) {
            let className = e.target.className
            e.target.className = className.substr(0, e.target.className.indexOf('inspect'))
        }
        
        const element = {
            id: e.timeStamp,
            pageX: e.pageX,
            pageY: e.pageY,
            eX: e.pageX - e.target.getBoundingClientRect().x,
            eY: e.pageY - e.target.getBoundingClientRect().y,
            element: e.target
        }
        
        click(element)
        
    }
}

export const onMouseOver = (hs) => (e) => {
    if (hs.inspect) {

        if (e.target.className.indexOf('noToPick') < 0  && e.target.id !== 'root' && e.target.localName !== 'html') {

            if (e.target.className.indexOf('inspect') < 0) {
                let className = e.target.className
                e.target.className = className + ' inspect'
            }

        } 

    }
}

export const onMouseOut = (hs) => (e) => {
    if(hs.inspect) {

        if (e.target.className.indexOf('noToPick') < 0  && e.target.id !== 'root' && e.target.localName !== 'html') {
    
            if (e.target.className.indexOf('inspect') >= 0) {
                let className = e.target.className
                e.target.className = className.substr(0, e.target.className.indexOf('inspect'))
            }
    
        }

    }
}