import { AllColor, EmojiRequest, PrimaryColor, TimeZone } from '../common';

// User responses
export type PersonUserObjectResponse = {
	type: 'person';
	person: {
		email?: string;
	};
	name: string | null;
	avatar_url: string | null;
	id: string;
	object: 'user';
};

export type PartialUserObjectResponse = {
	id: string;
	object: 'user';
};

export type BotUserObjectResponse = {
	type: 'bot';
	bot:
		| Record<string, never>
		| {
				owner:
					| {
							type: 'user';
							user:
								| {
										type: 'person';
										person: {
											email: string;
										};
										name: string | null;
										avatar_url: string | null;
										id: string;
										object: 'user';
								  }
								| PartialUserObjectResponse;
					  }
					| {
							type: 'workspace';
							workspace: true;
					  };
				workspace_name: string | null;
		  };
	name: string | null;
	avatar_url: string | null;
	id: string;
	object: 'user';
};

export type UserObjectResponse = PersonUserObjectResponse | BotUserObjectResponse;

// Select response
export type SelectPropertyResponse = {
	id: string;
	name: string;
	color: PrimaryColor;
};

export type StatusPropertyResponse = SelectPropertyResponse;

// Date response
export type DateResponse = {
	start: string;
	end: string | null;
	time_zone: TimeZone | null;
};

// Formula responses
export type StringFormulaPropertyResponse = {
	type: 'string';
	string: string | null;
};
export type DateFormulaPropertyResponse = {
	type: 'date';
	date: DateResponse | null;
};
export type NumberFormulaPropertyResponse = {
	type: 'number';
	number: number | null;
};
export type BooleanFormulaPropertyResponse = {
	type: 'boolean';
	boolean: boolean | null;
};

export type FormulaPropertyResponse<T = void> = T extends void
	?
			| StringFormulaPropertyResponse
			| DateFormulaPropertyResponse
			| NumberFormulaPropertyResponse
			| BooleanFormulaPropertyResponse
	: T;

// Verification Responses
export type VerificationPropertyUnverifiedResponse = {
	state: 'unverified';
	date: null;
	verified_by: null;
};

export type VerificationPropertyResponse = {
	state: 'verified' | 'expired';
	date: DateResponse | null;
	verified_by: PartialUserObjectResponse | PersonUserObjectResponse | BotUserObjectResponse | null;
};

// RichTextItem responses
export type AnnotationResponse = {
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: AllColor;
};

export type TextRichTextItemResponse = {
	type: 'text';
	text: {
		content: string;
		link: {
			url: string;
		} | null;
	};
	annotations: AnnotationResponse;
	plain_text: string;
	href: string | null;
};

export type LinkPreviewMentionResponse = {
	url: string;
};

export type TemplateMentionDateTemplateMentionResponse = {
	type: 'template_mention_date';
	template_mention_date: 'today' | 'now';
};

export type TemplateMentionUserTemplateMentionResponse = {
	type: 'template_mention_user';
	template_mention_user: 'me';
};

export type TemplateMentionResponse =
	| TemplateMentionDateTemplateMentionResponse
	| TemplateMentionUserTemplateMentionResponse;

export type MentionRichTextItemResponse = {
	type: 'mention';
	mention:
		| {
				type: 'user';
				user: PartialUserObjectResponse | UserObjectResponse;
		  }
		| {
				type: 'date';
				date: DateResponse;
		  }
		| {
				type: 'link_preview';
				link_preview: LinkPreviewMentionResponse;
		  }
		| {
				type: 'template_mention';
				template_mention: TemplateMentionResponse;
		  }
		| {
				type: 'page';
				page: {
					id: string;
				};
		  }
		| {
				type: 'database';
				database: {
					id: string;
				};
		  };
	annotations: AnnotationResponse;
	plain_text: string;
	href: string | null;
};

export type EquationRichTextItemResponse = {
	type: 'equation';
	equation: {
		expression: string;
	};
	annotations: AnnotationResponse;
	plain_text: string;
	href: string | null;
};

export type RichTextItemResponse<T = void> = T extends void
	? TextRichTextItemResponse | MentionRichTextItemResponse | EquationRichTextItemResponse
	: T;

// File responses
export type UrlFileResponse = {
	file: {
		url: string;
		expiry_time: string;
	};
	name: string;
	type?: 'file';
};

export type ExternalFileResponse = {
	external: {
		url: string;
	};
	name: string;
	type?: 'external';
};

// Icon responses
export type EmojiIconResponse = {
	type: 'emoji';
	emoji: EmojiRequest;
};

export type ExternalIconResponse = {
	type: 'external';
	external: {
		url: string;
	};
};

export type FileIconResponse = {
	type: 'file';
	file: {
		url: string;
		expiry_time: string;
	};
};

export type IconResponse = EmojiIconResponse | ExternalIconResponse | FileIconResponse | null;

// Cover responses
export type ExternalCoverResponse = ExternalIconResponse;

export type FileCoverResponse = FileIconResponse;

export type CoverResponse = ExternalCoverResponse | FileCoverResponse | null;
