import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';

class RequestHelper {
    static GET = 'GET';
    static POST = 'POST';
    static PUT = 'PUT';
    static DELETE = 'DELETE';

    constructor () {
        this.header = {
          'Content-Type': 'application/json'
        }
    }
    
      
    getRequestContent(body, method) {
        console.log('body is ' + body)
        if (body && body !== null) {
          return {
            method: method,
            headers: this.header,
            mode: 'cors',
            body: JSON.stringify(body)
          }
        } else {
          return {
            method: method,
            headers: this.header,
            mode: 'cors'
          }
        }
    }

    asyncFetch(url, body, method) {
        this.requestContent = this.getRequestContent(body, method)
        const data$ = fromFetch(url, this.requestContent).pipe(switchMap(response => {
                if (response.ok) {
                    console.log('calling ' + url)
                    return response.json();
                } else {
                    // Server is returning a status requiring the client to try something else.
                    return of({ error: true, message: `Error ${response.status}` });
                }
            }),
            catchError(err => {
                // Network or other error, handle appropriately
                console.error(err);
                return of({ error: true, message: err.message })
            })
        );
        
        return data$;
    }

    
}

export default RequestHelper;