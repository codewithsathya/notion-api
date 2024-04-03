import { AllColor, PrimaryColor, TimeZone } from '../common';

export type AnnotationRequest = {
	bold?: boolean;
	italic?: boolean;
	strikethrough?: boolean;
	underline?: boolean;
	code?: boolean;
	color?: AllColor;
};

export type TemplateMentionRequest =
	| {
			template_mention_date: 'today' | 'now';
			type?: 'template_mention_date';
	  }
	| {
			template_mention_user: 'me';
			type?: 'template_mention_user';
	  };

export type TextRichTextItemRequest = {
	text: {
		content: string;
		link?: {
			url: string;
		} | null;
	};
	type?: 'text';
	annotations?: AnnotationRequest;
};

export type MentionRichTextItemRequest = {
	mention:
		| {
				user: UserObjectRequest;
		  }
		| {
				date: DateRequest;
		  }
		| {
				page: {
					id: string;
				};
		  }
		| {
				database: {
					id: string;
				};
		  }
		| {
				template_mention: TemplateMentionRequest;
		  };
	type?: 'mention';
	annotations: AnnotationRequest;
};

export type EquationRichTextItemRequest = {
	equation: {
		expression: string;
	};
	type?: 'equation';
	annotations: AnnotationRequest;
};

export type RichTextItemRequest =
	| TextRichTextItemRequest
	| MentionRichTextItemRequest
	| EquationRichTextItemRequest;

export type SelectIdRequest = {
	id: string;
	name?: string;
	color?: PrimaryColor;
};

export type SelectNameRequest = {
	name: string;
	id?: string;
	color?: PrimaryColor;
};

export type UserObjectRequest = { id: string } | PersonUserObjectRequest | BotUserObjectRequest;

export type PersonUserObjectRequest = {
	type: 'person';
	person: {
		email?: string;
	};
	name: string | null;
	avatar_url: string | null;
	id: string;
	object: 'user';
};

export type BotUserObjectRequest = {
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
								| PartialUserObjectRequest;
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

export type PartialUserObjectRequest = {
	id: string;
	object: 'user';
};

export type DateRequest = {
	start: string;
	end?: string | null;
	time_zone?: TimeZone | null;
};

export type UrlFileRequest = {
	file: {
		url: string;
		expiry_time?: string;
	};
	name: string;
	type?: 'file';
};

export type ExternalFileRequest = {
	external: {
		url: string;
	};
	name: string;
	type?: 'external';
};
