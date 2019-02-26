function getArticleGenerator(articles) {
    let articleHolder = $("#content");

    return function() {
        if(articles.length > 0) {
            let article = $('<article>');
            article.append($(`<p>${articles.shift()}</p>`));
            articleHolder.append(article);
        }
    }
}
