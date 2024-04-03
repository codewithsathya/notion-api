import { QueryProperty } from './page-properties';
import { CoverResponse, IconResponse } from './page-property-responses';

export type QueryDatabaseResponse = {
	object: 'list';
	results: Array<PageObjectResponse>;
	next_cursor: string | null;
	has_more: boolean;
	type: 'page_or_database';
	page_or_database: Record<string, never>;
	request_id: string;
};

export type PageObjectResponse<T = void> = {
	parent:
		| {
				type: 'database_id';
				database_id: string;
		  }
		| {
				type: 'page_id';
				page_id: string;
		  }
		| {
				type: 'block_id';
				block_id: string;
		  }
		| {
				type: 'workspace';
				workspace: true;
		  };
	properties: T extends void ? Record<string, QueryProperty> : T;
	icon: IconResponse;
	cover: CoverResponse;
	created_by: PartialPageObjectResponse;
	last_edited_by: PartialPageObjectResponse;
	object: 'page';
	id: string;
	created_time: string;
	last_edited_time: string;
	archived: boolean;
	url: string;
	public_url: string;
};

export type PartialPageObjectResponse = {
	object: 'page';
	id: string;
};
