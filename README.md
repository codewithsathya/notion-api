# @leetnotion/notion-api

Notion API with extra functionalities. Wraps [`@notionhq/client`](https://github.com/makenotion/notion-sdk-js) with built-in rate limiting and convenience helpers for databases and pages.

Ships as ESM + CJS with full TypeScript types.

## Install

```bash
npm install @leetnotion/notion-api
# or: pnpm add @leetnotion/notion-api
```

## Usage

```ts
import AdvancedNotionClient from '@leetnotion/notion-api';

const notion = new AdvancedNotionClient(process.env.NOTION_TOKEN!);

// AdvancedNotionClient extends the official Client — all native methods still work.
const me = await notion.users.me({});
```

`AdvancedNotionClient` extends the official Notion `Client`, so every method from `@notionhq/client` is available. Requests are throttled to ~3/sec ([Bottleneck](https://github.com/SGrondin/bottleneck), `minTime: 333`) to stay within Notion's rate limit.

> Notion API v5 moved querying from databases to **data sources** — a database contains one or more data sources. The helpers below operate on data source ids.

## Helpers

### `getDatabaseId(name): Promise<string | null>`

Search for a data source by exact title, return its id (or `null` if not found). Pass this id to `getAllPages`.

```ts
const id = await notion.getDatabaseId('My Database');
```

### `getAllPages(dataSourceId, callbackFn?): Promise<PageObjectResponse[]>`

Fetch every page in a data source, auto-paginating. Optional `callbackFn` runs per page batch (useful for progress).

```ts
const pages = await notion.getAllPages(id, (res) => console.log(`+${res.results.length}`));
```

### `addPagesToDatabase(dataSourceId, properties[], callbackFn?): Promise<CreatePageResponse[]>`

Create multiple pages under a database from a list of property objects.

```ts
await notion.addPagesToDatabase(id, [
	{ Name: { title: [{ text: { content: 'Two Sum' } }] } },
]);
```

### `updatePages(pages[], callbackFn?): Promise<UpdatePageResponse[]>`

Update multiple pages by id.

```ts
await notion.updatePages([
	{ pageId: 'abc123', properties: { Status: { status: { name: 'Done' } } } },
]);
```

## License

MIT
