import RequestHelper from '../utils/RequestHelper.js'
class ArticleController {

    create(article) {
        let data$ = new RequestHelper().asyncFetch("http://localhost:8090/article/add", article, RequestHelper.POST);
        data$.subscribe({
            next: () => console.log('creating article ... '),
            complete: () => {
                console.log('done')
                alert('article added successfully');
            }
        });
    }

    fetchAll(comp) {
        let results = []
        let data$ = new RequestHelper().asyncFetch("http://localhost:8090/article/all", null, RequestHelper.GET);
        data$.subscribe({
            next: a => {
                console.log(a);
                results = a;
            },
            complete: () => {
                console.log('done')
                comp.setState({articles: results});
            }
        });
    }

    editArticle(article) {
        let data$ = new RequestHelper().asyncFetch("http://localhost:8090/article/edit/" + article.getId(), article, RequestHelper.PUT);
        data$.subscribe({
            next: () => console.log('modifying article ... '),
            complete: () => {
                console.log('done')
                alert('article modified successfully');
            }
        }); 
    }

    delete(id) {
        let data$ = new RequestHelper().asyncFetch("http://localhost:8090/article/delete/" + id, null, RequestHelper.DELETE);
        data$.subscribe({
            next: () => console.log('deleting article ... '),
            complete: () => {
                console.log('done')
                alert('article deleted successfully');
            }
        }); 
    }
}
    
export default ArticleController;