import { RollupFunction } from '../common';
import {
	DateResponse,
	ExternalFileResponse,
	FormulaPropertyResponse,
	PartialUserObjectResponse,
	RichTextItemResponse,
	SelectPropertyResponse,
	UrlFileResponse,
	UserObjectResponse,
	VerificationPropertyResponse,
	VerificationPropertyUnverifiedResponse,
} from './page-property-responses';

export type QueryNumberType = {
	type: 'number';
	number: number | null;
	id: string;
};

export type QueryUrl = {
	type: 'url';
	url: string | null;
	id: string;
};

export type QuerySelect = {
	type: 'select';
	select: SelectPropertyResponse | null;
	id: string;
};

export type QueryMultiSelect = {
	type: 'multi_select';
	multi_select: Array<SelectPropertyResponse>;
	id: string;
};

export type QueryStatus = {
	type: 'status';
	status: SelectPropertyResponse | null;
	id: string;
};

export type QueryDate = {
	type: 'date';
	date: DateResponse | null;
	id: string;
};

export type QueryEmail = {
	type: 'email';
	email: string | null;
	id: string;
};

export type QueryPhoneNumber = {
	type: 'phone_number';
	phone_number: string | null;
	id: string;
};

export type QueryCheckbox = {
	type: 'checkbox';
	checkbox: boolean;
	id: string;
};

export type QueryFiles = {
	type: 'files';
	files: Array<UrlFileResponse | ExternalFileResponse>;
	id: string;
};

export type QueryCreatedBy = {
	type: 'created_by';
	created_by: PartialUserObjectResponse | UserObjectResponse;
	id: string;
};

export type QueryCreatedTime = {
	type: 'created_time';
	created_time: string;
	id: string;
};

export type QueryLastEditedBy = {
	type: 'last_edited_by';
	last_edited_by: PartialUserObjectResponse | UserObjectResponse;
};

export type QueryLastEditedTime = {
	type: 'last_edited_time';
	last_edited_time: string;
	id: string;
};

export type QueryFormula<T = void> = {
	type: 'formula';
	formula: FormulaPropertyResponse<T>;
	id: string;
};

export type QueryUniqueId = {
	type: 'unique_id';
	unique_id: {
		prefix: string | null;
		number: number | null;
	};
	id: string;
};

export type QueryVerification = {
	type: 'verification';
	verification: VerificationPropertyUnverifiedResponse | VerificationPropertyResponse | null;
};

export type QueryTitle<T = void> = {
	type: 'title';
	title: Array<RichTextItemResponse<T>>;
	id: string;
};

export type QueryRichText<T = void> = {
	type: 'rich_text';
	rich_text: Array<RichTextItemResponse<T>>;
	id: string;
};

export type QueryPeople = {
	type: 'people';
	people: Array<PartialUserObjectResponse | UserObjectResponse>;
	id: string;
};

export type QueryRelation = {
	type: 'relation';
	relation: Array<{
		id: string;
	}>;
	id: string;
};

export type QueryRollup = {
	type: 'rollup';
	rollup:
		| {
				type: 'number';
				number: number | null;
				function: RollupFunction;
		  }
		| {
				type: 'date';
				date: DateResponse | null;
				function: RollupFunction;
		  }
		| {
				type: 'array';
				array: Array<QueryRollupArrayProperty>;
				function: RollupFunction;
		  };
	id: string;
};

export type QueryRollupArrayProperty =
	| QueryNumberType
	| QueryUrl
	| QuerySelect
	| QueryMultiSelect
	| QueryStatus
	| QueryDate
	| QueryEmail
	| QueryPhoneNumber
	| QueryCheckbox
	| QueryFiles
	| QueryCreatedBy
	| QueryCreatedTime
	| QueryLastEditedBy
	| QueryLastEditedTime
	| QueryFormula
	| QueryUniqueId
	| QueryVerification
	| QueryTitle
	| QueryRichText
	| QueryPeople
	| QueryRelation;

export type QueryProperty = QueryRollupArrayProperty | QueryRollup;
