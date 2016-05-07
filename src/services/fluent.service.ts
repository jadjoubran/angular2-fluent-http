import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FluentService{
	private baseUrl: string;

	constructor(private http: Http) {

	}

	setBaseUrl(baseUrl: string){
		if ( baseUrl && baseUrl.substr(-1) !== '/'){
			baseUrl = baseUrl + '/';
		}
		this.baseUrl = baseUrl;
	}

	getBaseUrl(){
		return this.baseUrl;
	}

	private getUrl(endpoint: string){
		return this.baseUrl + endpoint;
	}

	get(endpoint: string, options?: RequestOptionsArgs) : Observable<Response>{
		let url = this.getUrl(endpoint);

		return this.http.get(url, options);
	}

	post(endpoint: string, body: string, options?: RequestOptionsArgs) : Observable<Response>{
		let url = this.getUrl(endpoint);

		return this.http.post(url, body, options);
	}

	put(endpoint: string, body: string, options?: RequestOptionsArgs) : Observable<Response>{
		let url = this.getUrl(endpoint);

		return this.http.put(url, body, options);
	}

	delete(endpoint: string, options?: RequestOptionsArgs) : Observable<Response>{
		let url = this.getUrl(endpoint);

		return this.http.delete(url, options);
	}

	patch(endpoint: string, body: string, options?: RequestOptionsArgs) : Observable<Response>{
		let url = this.getUrl(endpoint);

		return this.http.patch(url, body, options);
	}

	head(endpoint: string, options?: RequestOptionsArgs) : Observable<Response>{
		let url = this.getUrl(endpoint);

		return this.http.head(url, options);
	}

}
