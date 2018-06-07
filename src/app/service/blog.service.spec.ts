import {TestBed, inject} from '@angular/core/testing';

import {BlogService} from './blog.service';
import {HttpClientModule} from '@angular/common/http';

describe('BlogService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BlogService],
            imports: [HttpClientModule]
        });
    });

    it('should be created', inject([BlogService], (service: BlogService) => {
        expect(service).toBeTruthy();
    }));
});
