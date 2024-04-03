import {
	MutationCheckbox,
	MutationDate,
	MutationEmail,
	MutationFiles,
	MutationMultiSelect,
	MutationNumberType,
	MutationPeople,
	MutationPhoneNumber,
	MutationRelation,
	MutationRichText,
	MutationSelect,
	MutationStatus,
	MutationTitle,
	MutationUrl,
} from './page-properties';

export type MutationPageProperty =
	| MutationTitle
	| MutationRichText
	| MutationNumberType
	| MutationUrl
	| MutationSelect
	| MutationMultiSelect
	| MutationPeople
	| MutationEmail
	| MutationPhoneNumber
	| MutationDate
	| MutationCheckbox
	| MutationRelation
	| MutationFiles
	| MutationStatus;

export type CreatePageProperties = Record<string, MutationPageProperty>;
export type UpdatePageProperties = Record<string, MutationPageProperty>;

export type CreatePageRequest = {
	parent:
		| {
				page_id: string;
				type?: 'page_id';
		  }
		| {
				database_id: string;
				type?: 'database_id';
		  };
	properties: CreatePageProperties;
};

export type UpdatePageRequest = {
	page_id: string;
	properties?: UpdatePageProperties;
};
