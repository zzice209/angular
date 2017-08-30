import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Response, Http} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
    constructor(private http: Http) {
    }

    // private instance variable to hold base url
    private commentsUrl = 'http://10.16.42.192:8080/';

    submitData(dataType: string, body: Object): Observable <any[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({headers: headers}); // Create a request option
        let response = this.http.post(this.commentsUrl + "video/add", body, options);
        switch (dataType) {
            case 'json':
                return response.map(this.extractJson).catch(this.handleError.bind(this));
            case 'text':
                return response.map(this.extractText).catch(this.handleError.bind(this));
        }
    }

    protected extractJson(res: Response): any {
        try {
            return res.json();
        } catch (err) {
            return {};
        }
    }

    protected extractText(res: Response): string {
        try {
            return res.text();
        } catch (err) {
            return '';
        }
    }

    protected handleError(error: any): any {
        let errorMessage = {
            body: error._body,
            status: error.status
        };
        return Observable.throw(errorMessage);
    }
}
