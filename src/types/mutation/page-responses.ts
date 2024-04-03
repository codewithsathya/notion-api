import { PageObjectResponse, PartialPageObjectResponse } from '../query';

export type UpdatePageResponse<T = void> = PageObjectResponse<T> | PartialPageObjectResponse;
export type CreatePageResponse<T = void> = PageObjectResponse<T> | PartialPageObjectResponse;
