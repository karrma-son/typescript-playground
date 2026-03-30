var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
var Post = /** @class */ (function () {
    function Post(id, title, content, author, likes) {
        if (likes === void 0) { likes = 0; }
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.likes = likes;
        this.postsArr = [];
        this.maxLikes = 6;
        this.contentmax = 100;
    }
    ;
    Object.defineProperty(Post.prototype, "isActive", {
        // get isActive():boolean {
        //    if(this.author){
        //      return true;
        //     }
        //      else{
        //      return false;
        //     }
        // }
        get: function () {
            return !!this.author;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "isPopular", {
        get: function () {
            return this.likes > 5;
        },
        enumerable: false,
        configurable: true
    });
    Post.prototype.like = function () {
        if (this.likes >= this.maxLikes) {
            this.likes += 0;
            console.log("".concat(this.author, " has reached max likes"));
        }
        else {
            this.likes += 1;
            console.log("".concat(this.author, " article has been liked"));
        }
        return this;
    };
    Post.prototype.unlike = function () {
        if (this.likes > 0) {
            this.likes -= 1;
        }
        else if (this.likes <= 0) {
            console.log("You can't go under 0");
        }
        return this;
    };
    Post.prototype.addContent = function (content) {
        this.content = content;
        this.postsArr = [content];
        if (this.content.length > this.contentmax) {
            console.log("Content is too long");
        }
        console.log("".concat(this.postsArr, ", ").concat(this.author));
        return content;
    };
    Post.prototype.getSummary = function () {
        return "".concat(this.id, ", ").concat(this.title, ", ").concat(this.content, ", ").concat(this.author, ", ").concat(this.likes, ", ").concat(this.isPopular, ", ").concat(this.isActive);
    };
    return Post;
}());
var post1 = new Post(1, "Learning more about TS", "Long content...", "Mason");
var post2 = new Post(2, "", "", "");
(_k = (_j = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = post1.like()) === null || _a === void 0 ? void 0 : _a.like()) === null || _b === void 0 ? void 0 : _b.like()) === null || _c === void 0 ? void 0 : _c.like()) === null || _d === void 0 ? void 0 : _d.like()) === null || _e === void 0 ? void 0 : _e.like()) === null || _f === void 0 ? void 0 : _f.like()) === null || _g === void 0 ? void 0 : _g.like()) === null || _h === void 0 ? void 0 : _h.like()) === null || _j === void 0 ? void 0 : _j.like()) === null || _k === void 0 ? void 0 : _k.like();
console.log(post1.getSummary());
(_p = (_o = (_m = (_l = post1.unlike()) === null || _l === void 0 ? void 0 : _l.unlike()) === null || _m === void 0 ? void 0 : _m.unlike()) === null || _o === void 0 ? void 0 : _o.unlike()) === null || _p === void 0 ? void 0 : _p.unlike().unlike().unlike().unlike().unlike().unlike().unlike().unlike();
var content1 = JSON.stringify(post1.addContent("Welcome to the future"));
var content2 = JSON.stringify(post1.addContent("This is more content"));
console.log(post1.getSummary());
console.log(post2.getSummary());
console.log(content1);
console.log(content2);
