import {
	DateRequest,
	ExternalFileRequest,
	RichTextItemRequest,
	SelectIdRequest,
	SelectNameRequest,
	UrlFileRequest,
	UserObjectRequest,
} from './page-property-requests';

export type MutationTitle = {
	title: Array<RichTextItemRequest>;
	type?: 'title';
};

export type MutationRichText = {
	rich_text: Array<RichTextItemRequest>;
	type?: 'rich_text';
};

export type MutationNumberType = {
	number: number | null;
	type?: 'number';
};

export type MutationUrl = {
	url: string | null;
	type?: 'url';
};

export type MutationSelect = {
	select: SelectNameRequest | SelectIdRequest | null;
	type?: 'select';
};

export type MutationMultiSelect = {
	multi_select: Array<SelectNameRequest | SelectIdRequest>;
	type?: 'multi_select';
};

export type MutationPeople = {
	people: Array<UserObjectRequest>;
	type?: 'people';
};

export type MutationEmail = {
	email: string | null;
	type?: 'email';
};

export type MutationPhoneNumber = {
	phone_number: string | null;
	type?: 'phone_number';
};

export type MutationDate = {
	date: DateRequest | null;
	type?: 'date';
};

export type MutationCheckbox = {
	checkbox: boolean;
	type?: 'checkbox';
};

export type MutationRelation = {
	relation: Array<{
		id: string;
	}>;
	type?: 'relation';
};

export type MutationFiles = {
	files: Array<UrlFileRequest | ExternalFileRequest>;
	type?: 'files';
};

export type MutationStatus = {
	status: SelectNameRequest | SelectIdRequest | null;
	type?: 'status';
};
