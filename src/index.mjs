import assert from 'node:assert/strict';
import { getMemorixDataDatabaseName, getMemorixMetadataDatabaseName, parseMemorixDatabaseName } from '@x12i/memorix-db-router';

const data = getMemorixDataDatabaseName('example', 'entities');
const metadata = getMemorixMetadataDatabaseName('example-agent');
assert.equal(data, 'example-memorix-entities');
assert.equal(metadata, 'example-agent-memorix-catalox');
const parsed = parseMemorixDatabaseName(data);
assert(parsed);
console.log({ data, metadata, parsed });
