var moreText = "Read more",
    lessText = "Read less",
    moreButton = $("a.readmorebtn");

moreButton.click(function () {
    var $this = $(this);
    $this.text($this.text() == moreText ? lessText : moreText).next("p.more").slideToggle("fast");
});