import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class TableService {
    constructor(private http: HttpClient) { }

    getStudents(): Observable<Array<Object>> {
        const URL: string = environment.STUDENTS_API;
        return this.http.get<Array<Object>>(URL).pipe(map((users: Array<Object>) => {
            let newData = users.map((user: any) => {
                return {
                    'Name': user['name'],
                    'Class': Math.floor(Math.random() * 10) + 1,
                    'Section': String.fromCharCode(Math.floor(Math.random() * 5) + 65),
                    'Math': Math.floor(Math.random() * (50)) + 50,
                    'Science': Math.floor(Math.random() * 50) + 50,
                    'Computer': Math.floor(Math.random() * 50) + 50,
                }
            });
            return newData;
        }));
    }
}