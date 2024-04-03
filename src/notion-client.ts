import { Client } from '@notionhq/client';
import Bottleneck from 'bottleneck';
import type { CreatePageProperties, UpdatePageProperties } from './types/mutation/page-requests';
import { CreatePageResponse, UpdatePageResponse } from './types/mutation/page-responses';
import { PageObjectResponse, QueryDatabaseResponse } from './types/query';

export class AdvancedNotionClient extends Client {
	private limiter;

	constructor(access_token: string) {
		super({ auth: access_token });
		this.limiter = new Bottleneck({ minTime: 333 });
	}

	public async getAllPages(databaseId: string): Promise<PageObjectResponse[]> {
		let startCursor: string | undefined;
		let hasNext = true;
		const pages: PageObjectResponse[] = [];
		do {
			// eslint-disable-next-line @typescript-eslint/no-loop-func
			const response = (await this.limiter.schedule(() =>
				this.databases.query({
					database_id: databaseId,
					start_cursor: startCursor,
				}),
			)) as QueryDatabaseResponse;
			pages.push(...response.results);
			hasNext = response.has_more;
			startCursor = response.next_cursor as string;
		} while (hasNext);
		return pages;
	}

	public async addPagesToDatabase(
		databaseId: string,
		listOfProperties: CreatePageProperties[],
		callbackFn?: (response: CreatePageResponse) => void,
	): Promise<CreatePageResponse[]> {
		const responses: CreatePageResponse[] = [];
		for (let i = 0; i < listOfProperties.length; i += 1) {
			// eslint-disable-next-line @typescript-eslint/no-loop-func
			const response = await await this.limiter.schedule(() =>
				this.pages.create({
					parent: {
						database_id: databaseId,
					},
					properties: listOfProperties[i],
				}),
			);
			if (callbackFn) {
				await callbackFn(response);
			}
			responses.push(response);
		}
		return responses;
	}

	public async updatePages(
		pages: { pageId: string; properties: UpdatePageProperties }[],
		callbackFn?: (response: UpdatePageResponse) => void,
	): Promise<UpdatePageResponse[]> {
		const responses: UpdatePageResponse[] = [];
		for (let i = 0; i < pages.length; i += 1) {
			// eslint-disable-next-line @typescript-eslint/no-loop-func
			const response = await await this.limiter.schedule(() =>
				this.pages.update({
					page_id: pages[i].pageId,
					properties: pages[i].properties,
				}),
			);
			responses.push(response);
			if (callbackFn) {
				await callbackFn(response);
			}
		}
		return responses;
	}
}

export default AdvancedNotionClient;
