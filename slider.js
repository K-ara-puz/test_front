$(document).ready(function() {
    let position = 0;
    // const slidesToShow = 2;

    const windWidth = window.screen.width,
    slidesToShow = windWidth > 1200 ? 2 : windWidth < 700 ? 1 : 1;

    // slidesToShow = windWidth < 700 ? 1 : 2;

    const slidesToScroll = 1;
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnNext.click(function(){
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    btnPrev.click(function() {
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.css({
            transform: `translate(${position}px)`
        });
    };

    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled',
            position <= -(itemsCount - slidesToShow) * itemWidth
            
        );

    };

    checkBtns();
});




$(document).ready(function() {
    let position = 0;
    // const slidesToShow = 1;

    const windWidth = window.screen.width,
    slidesToShow = windWidth > 1500 ? 2 : windWidth < 700 ? 1 : 1;

    // slidesToShow = windWidth < 700 ? 1 : 2;

    const slidesToScroll = 1;
    const container = $('.slider-container1');
    const track = $('.slider-track1');
    const item = $('.slider-item1');
    const btnPrev = $('.btn-prev1');
    const btnNext = $('.btn-next1');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnNext.click(function(){
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    btnPrev.click(function() {
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.css({
            transform: `translate(${position}px)`
        });
    };

    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled',
            position <= -(itemsCount - slidesToShow) * itemWidth
            
        );

    };

    checkBtns();
});