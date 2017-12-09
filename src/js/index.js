import Article from './article';
import '../css/index.css';

{
    let root = document.getElementById('root');
    let articles = [];
    for(let idx of new Array(100).keys()){
        articles.push(
            new Article(`불필요한 언쟁은 피한다.`,`<p>사람이 살다보면, 다른 사람과 마찰이 있을 수 있다. 올바른 마찰은 서로의 발전적인 방향을 만들지만, 반드시 그렇지 않을 결과를 낳는다. 대표적으로 서로의 자존심을 건드는 상황을 초래하면 서로간의 마음이 상하는 일이 발생 한다.</p>
            <p>서로간의 마음이 상하지 않도록 하는 최선의 방법은 언쟁이 왜 시작하게 되었고, 다른 사람과 무엇에 대한 주제로 이야기를 나누었는지 대화의 논지를 대화를 하면서 잃지 않으면 된다. 타인과의 살아온 삶의 모양과 방향이 다르기 때문에 존중한다는 것을 발현해야하는 때이기도 하기 때문이다.</p>`)
        );
    }
    let parser = new DOMParser();
    for(let article of articles){
        let html = parser.parseFromString(article.render(), 'text/html');
        root.appendChild(html.body.firstChild);
    }
}

window.addEventListener('scroll', function(e){
    console.log(JSON.stringify(window))
});