using { managed, cuid } from '@sap/cds/common';

namespace bug.showcase.db;

entity Example : managed, cuid {
	Title : String(100);
	Description : String(1000);
}
