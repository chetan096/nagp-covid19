import { NewsStoreService } from '@app/core/services/news/news-store.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('NewsStoreService', () => {
    let service: NewsStoreService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [NewsStoreService]
        });
        service = TestBed.inject(NewsStoreService);
    });

    it('initial news count should be 3', () => {
        expect(service.createDb().savedNews.length).toBe(3);
    });

    it('next id to be generated should be 4', () => {
        expect(service.genId(service.createDb().savedNews)).toBe(4);
    });

    it('should sort news list in descending order by date', () => {
        expect(service.sortNews(service.createDb().savedNews)[0].id).toBe(3);
    });

});
