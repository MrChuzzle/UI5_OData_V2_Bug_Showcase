using { bug.showcase.db as db } from '../db/schema';

service BaseService {
	entity Example as projection on db.Example;
}
