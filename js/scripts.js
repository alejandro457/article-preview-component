((d) => {
    let active = null;

    d.addEventListener('click', (e) => {
        
        let shareBtn = e.target.matches('.preview__share-button')
            ?e.target
            :e.target.parentNode.matches('.preview__share-button')
            ?e.target.parentNode
            :e.target.parentNode.parentNode.matches('.preview__share-button')
            ?e.target.parentNode.parentNode
            :false;

        if (shareBtn) {
            if(active && active !== shareBtn) {
                active.classList.remove('preview__share-button--active');
            }

            shareBtn.classList.toggle('preview__share-button--active');
            active = shareBtn;

        } else if (active) {
            active.classList.remove('preview__share-button--active');
            active = null;
        }
    });
})(document);
