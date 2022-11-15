const containers = document.querySelectorAll('.content');

window.addEventListener('scroll', showContainers);
showContainers();

function showContainers(){
  const triggerPoint = (window.innerHeight/5)*4;
  containers.forEach(container =>{
    const containTop = container.getBoundingClientRect().top;
    //returned value is a DOMRect object which is the smallest rectangle which contains the entire element, including its padding and border-width. The left, top, right, bottom, x, y, width, and height properties describe the position and size of the overall rectangle in pixels. Properties other than width and height are relative to the top-left of the viewport.
    if(containTop < triggerPoint){
      container.classList.add('show')
    } else {
      container.classList.remove('show')
    }
  })
  console.log(triggerPoint, window.innerHeight)

};