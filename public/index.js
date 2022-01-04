(() => {
    const getImages = url => {
        return new Promise((res, rej) => {
            let xhr = new XMLHttpRequest()
            xhr.open('GET', url)
            xhr.onload = () => {
                if (xhr.status === 200) res(JSON.parse(xhr.response))
                else rej(Error(`Error: ${xhr.statusText}`))
            }
            xhr.send();
        })
    }

    const setImages = url => {
        getImages(url)
            .then(result => {
                const galleryItems = document.getElementsByClassName('gallery__item')
                for (let i = 0; i < galleryItems.length; i++) {
                    galleryItems[i].style.backgroundImage = `url(data:image/jpeg;base64,${result[i]})`
                }
            })
    }

    const newBtn = document.getElementById('new')
    newBtn.addEventListener('click', () => { setImages('/images') })
})()