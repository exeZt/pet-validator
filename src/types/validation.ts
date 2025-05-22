/**
 * @typeParam P is Key of scheme, like a valid. name
 * */
export interface IValidationScheme<T> {
	[name: string]: T;
}

export interface IDefaultScheme {
	regex: RegExp;
}