import { Component, OnInit } from '@angular/core';
import {NotFoundService} from '../../service/NotFoundService';

@Component({
    selector: 'app-not-found',
    templateUrl: './notfound.html',
})
export class NotFoundComponent implements OnInit {
    public status: { code: number; message: string };

    constructor(private notFoundService: NotFoundService) {}

    ngOnInit(): void {
        this.notFoundService.setStatus(404, 'Not Found');
    }
}
