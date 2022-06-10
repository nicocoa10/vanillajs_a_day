const url= "./docs/cover.pdf"


let pdfDoc= null,
    pageNum=1,
    pageIsRendering= false,
    pageNumIsPending= null,
    totalPageNum=0

const scale= 1.5,
    canvas= document.querySelector('#pdf-render'),
    ctx= canvas.getContext('2d');


// Render the page

const renderPage = num => {
    pageIsRendering=true

    //get page

    pdfDoc.getPage(num).then(page => {

        const viewport = page.getViewport({scale})
        canvas.height = viewport.height
        canvas.width = viewport.width

        const renderCtx = {
            canvasContext: ctx,
            viewport
        }

        page.render(renderCtx).promise.then( () => {
            pageIsRendering = false;

            if (pageNumIsPending !==null){
                renderPage(pageNumIsPending)
                pageNumIsPending=null
            }
        })

        // Output current page

        setCurrentPageNum(num)

    })

}

//check for pages rendering

const queueRenderPage= num => {
    if (pageIsRendering){
        pageNumIsPending=num
    }
    else{
        renderPage(num)
    }
}

// show prev page 

const showPrev = () => {

    if (pageNum <= 1){
        return
    }
    pageNum--;
    queueRenderPage(pageNum)
}

const showNext = () => {

    if (pageNum >= pdfDoc.numPages){
        return
    }
    pageNum++;
    queueRenderPage(pageNum)
}

// Get document

pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc=pdfDoc_

    setTotalPageNum(pdfDoc._pdfInfo.numPages)

    renderPage(pageNum)

})


// set total pages
const setTotalPageNum = numPages => {
    document.querySelector('.total-page-number').textContent=numPages

}

// set current Page

const setCurrentPageNum =  currentPage => {
    document.querySelector('.current-page-number').textContent=currentPage

}

document.querySelector('.prev-page').addEventListener('click', showPrev)
document.querySelector('.next-page').addEventListener('click', showNext)