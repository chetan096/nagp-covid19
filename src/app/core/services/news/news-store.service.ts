import { InMemoryDbService, RequestInfo, RequestInfoUtilities, ResponseOptions, STATUS, getStatusText } from 'angular-in-memory-web-api';
import { News } from '@app/shared/models/news.model';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { HttpRequest } from '@angular/common/http';


export class NewsStoreService implements InMemoryDbService {

    createDb() {
        const savedNews: News[] = [
            {
                id: 1,
                title: 'Coronavirus live updates: National recovery rate now 25.19%, health ministry says',
                description: 'First News added by chetan mahajan on the topic covid19',
                summary: `The number of coronavirus cases in India climbed to 33,610 according to the ministry of health,
                          while the number of fatalities rose to 1,075. Meanwhile, more than 3.13 million people have been reported to be infected by the novel coronavirus globally `,
                fullNews: `The number of coronavirus cases in India climbed to 33,610 according to the ministry of health,
                while the number of fatalities rose to 1,075. Meanwhile, more than 3.13 million people have been reported to be infected by the novel coronavirus globally `,
                date: new Date('2020-04-27')
            },
            {
                id: 2,
                title: 'Karnataka\'s Victoria & Surathkal quarantine facilities model: Central team',
                description: 'Second News added by chetan mahajan on the topic covid19',
                summary: `Pankaj Kumar Pandey, commissioner, Karnataka department of health and family welfare, said: “The team declared that the Victoria Hospital and Surathkal
                 quarantine facilities were model practices to be followed. They also made suggestions on mass counseling.”`,
                fullNews: `Pankaj Kumar Pandey, commissioner, Karnataka department of health and family welfare, said:
                “The team declared that the Victoria Hospital and Surathkal quarantine facilities were model practices to be followed.`,
                date: new Date('2020-04-28')
            },
            {
                id: 3,
                title: `23 pilgrims who returned to Punjab from Sri Hazur Sahib in Maharashtra's Nanded have tested positive`,
                description: 'Third News added by chetan mahajan on the topic covid19',
                summary: `They have been shifted to isolation ward at Guru Nanak Dev Hospital: Amritsar deputy commissioner Shivdular Singh Dhillon`,
                fullNews: 'They have been shifted to isolation ward at Guru Nanak Dev Hospital: Amritsar deputy commissioner Shivdular Singh Dhillon',
                date: new Date('2020-04-29')
            }
        ];
        return { savedNews };
    }

    genId(newsList: News[]): number {
        return newsList.length > 0 ? Math.max(...newsList.map(news => news.id)) + 1 : 1;
    }

    // sort news by date
    sortNews(savedNews): News[] {
        const latestNews = savedNews.sort((news1, news2) => {
            if (news1.date > news2.date) {
                return -1;
            } else {
                return 1;
            }
        });
        return latestNews;
    }

    // overridden get method to sort news on get call
    get(reqInfo: RequestInfo): Observable<News[]> {
        return reqInfo.utils.createResponse$(() => {
            const collection = this.sortNews(reqInfo.collection);
            const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
            const id = reqInfo.id;

            const data = id === undefined ? collection : reqInfo.utils.findById(collection, id);

            const options: ResponseOptions = data ?
                {
                    body: dataEncapsulation ? { data } : data,
                    status: STATUS.OK
                } :
                {
                    body: { error: `'News' with id='${id}' not found` },
                    status: STATUS.NOT_FOUND
                };
            return options;
        });
    }

    // overridden post method to add news to the new added news
    post(requestInfo: RequestInfo) {
        const addedNews = ((requestInfo.req as HttpRequest<any>).body) as News;
        addedNews.date = new Date();
        addedNews.id = this.genId(requestInfo.collection);
        (requestInfo.collection as News[]).push(addedNews);
        return this.get(requestInfo);
    }
}
