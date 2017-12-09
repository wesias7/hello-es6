class Article {
    constructor(){
        this._title = arguments[0] ? arguments[0] : '제목';
        this._context = arguments[1] ? arguments[1] : '내용';
        this.regdate = new Date();
    }
    set title(title){
        this._title = title;
    }
    get title(){
        return this._title;
    }
    set context(context){
        this._context = context;
    }
    get context(){
        return this._context;
    }
    render(){
        return `<article class="article">
            <header>
                <h1>${this._title}</h1>
            </header>
            <section>
                ${this._context}
            </section>
            <footer>
                <div>
                    <small class="pos"></small>
                </div>
                <div>
                    <small>${this.regdate.toString()}</small>
                </div>
            </footer>
        </article>`;
    }
}

export default Article;