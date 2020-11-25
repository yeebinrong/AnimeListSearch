import { Injectable } from '@angular/core';
import { Dexie } from 'dexie';
import { SearchForm } from './models';

export const normalizeQ = (q:string) => q.trim().toLowerCase()

@Injectable()
export class AnimeDataBase extends Dexie {
    private db: Dexie.Table<SearchForm, string>;

    constructor () {
        // database name
        super('anime');

        // setup schema for v1
        this.version(1).stores({
            // index id and q
            db: '++id, q'
        });

        // get a reference to the db collection
        this.db = this.table("db");

    }

    async addSearch(d: SearchForm):Promise<any> {
        const gen = d.genre 
        d.q = normalizeQ(d.q);
        // select count(*) from db where q like 'q' and genre == 'genre'
        const resultsCount = await this.db
            .where('q').equals(d.q)
            .and(doc => doc.genre == gen)
            .count()
        if (resultsCount > 0) {
            // dont add if entry already exists
            return
        }
        return this.db.add(d);
    }

    getSearch():Promise<SearchForm[]> {
        return this.db.toArray()
    }
}