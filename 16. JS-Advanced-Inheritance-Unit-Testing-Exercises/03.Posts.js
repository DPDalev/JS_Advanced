function posts() {

    class Post {
        constructor (title, content) {
            this.title = title;
            this.content = content;
        }

        toString () {
            return `Post: ${this.title}\n` + `Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let ratingDiff = this.likes - this.dislikes;
            let string = super.toString() + `\nRating: ${ratingDiff}`;
            if(this.comments.length > 0) {
                string += "\nComments:";
                for (let comment of this.comments) {
                    string += `\n * ${comment}`
                }
            }
            return string;
        }
    }

    class BlogPost extends Post {
        constructor (title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views ++;
            return this;
        }

        toString() {
            let string = super.toString() + `\nViews: ${this.views}`;
            return string;
        }
    }
    return { Post, BlogPost, SocialMediaPost};
}







//let Post = posts().Post;
let SocialMediaPost = posts().SocialMediaPost;

//let post = new Post("Post", "Content");

//console.log(post.toString());

//let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
//
//scm.addComment("Good post");
//scm.addComment("Very good post");
//scm.addComment("Wow!");
//
//console.log(scm.toString());

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());