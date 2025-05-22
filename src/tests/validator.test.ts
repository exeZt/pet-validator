import {describe, expect, test} from '@jest/globals';
import Validator from "../index";

const schemes = {
	"phone":{
		regex: /\+\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{5})/
	}
}

describe('Test Validator class', () => {
	test('Should validate phone', (done) => {
		expect(new Validator(schemes).validate('+79999997799')).toBe(true);
		done();
	});
	test('Should validate phone & return val. scheme', (done) => {
		expect(new Validator(schemes).validate('+79999997799', 'phone'))
			.toEqual({"phone": {"regex": /\+\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{5})/}});
		done();
	});
	test('Should return getter of scheme as schemes', (done) => {
		expect(new Validator(schemes).scheme).toBe(schemes);
		done();
	});
})