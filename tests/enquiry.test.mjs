import assert from 'node:assert/strict';
import test from 'node:test';
import { buildAlert, validateEnquiry } from '../worker/enquiry.js';

const valid = { name: ' Meera Rao ', phone: '+91 98765 43210', projectType: 'Turnkey', email: '', locality: 'Kukatpally', message: '' };

test('accepts a valid enquiry and trims fields', () => {
  const { enquiry, errors } = validateEnquiry(valid);
  assert.equal(errors, undefined);
  assert.equal(enquiry.name, 'Meera Rao');
});

test('rejects missing name, bad phone, unknown type and bad email', () => {
  const { errors } = validateEnquiry({ name: ' ', phone: '12345', projectType: 'Castle', email: 'a@b' });
  assert.deepEqual(Object.keys(errors).sort(), ['email', 'name', 'phone', 'type']);
});

test('rejects oversized fields and non-string values', () => {
  assert.ok(validateEnquiry({ ...valid, message: 'x'.repeat(2001) }).errors.message);
  assert.ok(validateEnquiry({ ...valid, name: { $ne: 1 } }).errors.name);
});

test('alert email escapes HTML from visitors', () => {
  const { enquiry } = validateEnquiry({ ...valid, message: '<script>alert(1)</script>' });
  const { html, text } = buildAlert(enquiry, 7);
  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /&lt;script&gt;/);
  assert.match(text, /wa\.me\/919876543210/);
});
