export  function moveDown(e :any) {
    const transform = 'translateY(10px)';
    e.currentTarget.style.transform = transform;
    e.currentTarget.style.transition = `transform 0.25s`
}

export  function moveUp(e: any) {
    e.currentTarget.style.removeProperty('transform');
    e.currentTarget.style.removeProperty('transition');
}